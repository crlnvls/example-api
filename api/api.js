const express = require("express");
const cors = require("cors");
const busRouter = require("./routers/bus");

const api = express();

// Add midleware
api.use(express.json());
api.use(cors());

api.get("/", (req, res) => {
  res.json({ message: "Welcome to the Bus API!" });
});

// Set up the bus routes
api.use("/buses", busRouter);

module.exports = api;
