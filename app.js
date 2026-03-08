const express = require("express")
const mongoose = require("mongoose")
const Listing = require("./models/listing")
const path = require("path")

const app = express();

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
    res.send("Hi I am root")
});

// Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
});

//Show Route
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listing/show.ejs", { listing });
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

