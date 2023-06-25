const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

//this will help us pass data that we receive from the client on our server side that is in a JSON format in the body
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
