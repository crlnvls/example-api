const db = require("../dbConfig");

class Bus {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.capacity = data.capacity;
  }

  // getAll()
  // get method === function -> property
  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const busData = await db.query("SELECT * FROM bus;");
        const buses = busData.rows.map((b) => new Bus(b));
        resolve(buses);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }

  static async create(name, capacity) {
    const newBus = await db.query(
      "INSERT INTO BUS (name, capacity) VALUES ($1, $2) RETURNING *;",
      [name, capacity]
    );

    const bus = new Bus(newBus.rows[0]);
    return bus;
  }
}

module.exports = Bus;
