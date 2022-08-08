const Bus = require("../models/bus");

async function show(res, res) {
  // Bus.getAll() === function
  // Bus.all() === property
  try {
    const buses = await Bus.all;

    res.json({
      buses: buses,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
}

async function create(req, res) {
  try {
    const name = req.body.name;
    const capacity = req.body.capacity;
    const create = await Bus.create(name, capacity);

    res.json({
      bus: create,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
}

module.exports = {
  show,
  create,
};
