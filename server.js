const mongoose = require('mongoose');
const express = require("express");
const logger = require("morgan");
const dotenv = require('dotenv')
const dotenv = require("dotenv")

const PORT = process.env.PORT || 8080;

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


    app.use(require("./routes/view.js"));
app.use(require("./routes/api.js"));

// Server Listen
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});