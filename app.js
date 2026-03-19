const express = require("express")
const mongoose = require("mongoose")
const Listing = require("./models/listing")
const methodOverride = require("method-override")
const path = require("path")
const ejsMate = require('ejs-mate')
const wrapAsync = require("./utils/wrapAsync.js")
const ExpressError = require("./utils/ExpressError.js")
const { listingSchema, reviewSchema } = require("./schema.js")
const Review = require("./models/review")

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("Connected")
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));
app.engine("ejs", ejsMate)
app.use(express.static(path.join(__dirname, "public")))


// root
app.get("/", (req, res) => {
  res.send("Hi I am root")
});

const validateListing = (req, res, next) => {
  console.log("BODY:", req.body);
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg)
  } else {
    next();
  }
}
const validateReview = (req, res, next) => {
  console.log("BODY:", req.body);
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg)
  } else {
    next();
  }
}


// Index Route
app.get("/listings",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
  }));

// New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Create Route
app.post("/listings",
  validateListing,
  wrapAsync(async (req, res) => {
    // let result=listingSchema.validate(req.body);
    // console.log(result)
    if (!req.body || !req.body.listing) {
      throw new ExpressError(400, "Invalid data");
    }
    const newListing = new Listing(req.body.listing);
    await newListing.save()
    res.redirect("/listings")
  }));

// Show Route
app.get("/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
  }));

// Edit Route
app.get("/listings/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
  }));

// update route
app.put("/listings/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`)
  }));

// delete route
app.delete("/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let delListing = await Listing.findByIdAndDelete(id);
    console.log(delListing)
    res.redirect("/listings")
  }));

// Reviews
// Post Route
app.post("/listings/:id/reviews",
  validateReview,
  wrapAsync(async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    res.redirect(`/listings/${listing._id}`)
  }
));

app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
  console.log("🔥 ERROR:", err);   // 👈 ADD THIS
  let { statusCode = 500, message = "something wrong" } = err;
  res.status(statusCode).send(message); // 👈 temporarily send raw message
});

// app.use((err, req, res, next) => {
//   let { statusCode = 500, message = "something wrong" } = err;
//   res.status(statusCode).render("error.ejs", { message })
//   });

app.listen(8080, () => {
  console.log("Server listening at 8080")
  });


// app.get("/testListing",async(req,res)=>{
//     let sampleListing = new Listing({
//         title: "New Web",
//         description: "Document",
//         price: 1200,
//         location: "Laptop",
//         country: "Europe",
//     });
//     await sampleListing.save();
//     console.log("Sample saved")
//     res.send("Successful Testing")
// })
