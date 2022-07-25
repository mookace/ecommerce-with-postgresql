const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");

const port = process.env.PORT || 7000;

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
const user = require("./routes/user");
app.use("/api/user", user);

app.listen(port, () => {
  console.log("------- starting server -------");
  console.log(`server is running on port ${port}`);
});
