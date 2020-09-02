// Requiring Express and mongoose
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Accessing public directory
app.use(express.static("public"));

// Requiring our routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

mongoose.connect(process.env.MONGODB_URI || 
    "mongodb://localhost/workout", { 
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
      useFindAndModify: false },
    );


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});