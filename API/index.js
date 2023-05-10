const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

app.use(express.json());

// REST API crud operations 
const authRoute = require("./Routes/Auth");

app.use("/API/Auth", authRoute);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected successfully");
});

app.listen(8800, () => {
    console.log("Server is running...");    
});

