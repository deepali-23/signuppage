const express = require("express");
const app = express(); //initailise the express by usina app(or given it the name)
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routeUrl = require("./routes/routes"); //import routes folder inside routes file
const cors = require("cors");

dotenv.config();

//connection set up for monodb....
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("DATABASE CONNECTED")
);

// mongoose.connection
//   .once("open", () => console.log("Your Database is Connected"))
//   .on("error", (error) => {
//     console.log("Your Error", error);
//   });

app.use(express.json());
app.use(cors());

app.use("/app", routeUrl);
app.listen(4000, () => console.log("server is up and its running"));
