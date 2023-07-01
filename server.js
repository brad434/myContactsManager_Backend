const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();

const port = process.env.PORT || 5000;

// database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB database connected. Notification from server.js");
  } catch (err) {
    console.log("MongoDB database connection failed");
  }
};

//this will help us pass data that we receive from the client on our server side that is in a JSON format in the body
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  connect();
  console.log(`Server running on port ${port}`);
});
