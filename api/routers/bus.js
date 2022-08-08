const { Router } = require("express");
const busController = require("../controllers/bus");

const busRouter = Router();

busRouter.get("/", busController.show);
busRouter.post("/", busController.create);

module.exports = busRouter;
