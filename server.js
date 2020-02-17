const mongoose = require('mongoose');
const express = require("express");
const logger = require("morgan");
const dotenv = require('dotenv')
dotenv.config()


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 
app.use(express.static("public"));

// connection to mongoDB 
mongoose.connect(process.env.MONGODB_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true
    }).


// Server Listen
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });