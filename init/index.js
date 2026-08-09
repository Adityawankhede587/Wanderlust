const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");
const { init } = require("../models/review");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() =>{
    console.log("connected to DB succesfully");
})
.catch((err) =>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}


const initDB = async () =>{
    await Listing.deleteMany({});
     initData.data = initData.data.map((obj) =>({
        ...obj,
        owner:"6a732d480588d92f7c9fb8e2",
    }));
    await Listing.insertMany(initData.data);
    console.log("data was intialised");
    
}
initDB();
