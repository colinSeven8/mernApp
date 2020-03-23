const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); //Helps us connect to Mongo

require("dotenv").config();

// Server
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json()); // Allow to parse json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});