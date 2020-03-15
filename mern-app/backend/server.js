const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// Server
const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(express.json()); // Allow to parse json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB batacase connection established successfully!");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});