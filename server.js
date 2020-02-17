//npm dep
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//express
const PORT = process.env.PORT || 3000;
const app = express();

//express middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//mongoDB 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true 
    , useFindAndModify: false
});

//routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/view"));

//server 
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});