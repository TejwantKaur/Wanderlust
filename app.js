const express = require("express")
const mongoose = require("mongoose")
const Listing = require("./models/listing")
const methodOverride = require("method-override")
const path = require("path")
const ejsMate = require('ejs-mate')

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
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate)
app.use(express.static(path.join(__dirname,"public")))


// root
app.get("/", (req, res) => {
    res.send("Hi I am root")
});

// Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
});

// New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// Create Route
app.post("/listings", async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save()
    res.redirect("/listings")
});

// Show Route
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});

// Edit Route
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
});

// update route
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`)
});

// delete route
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    let delListing = await Listing.findByIdAndDelete(id);
    console.log(delListing)
    res.redirect("/listings")
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

app.listen(8080, () => {
    console.log("Server listening at 8080")
});

