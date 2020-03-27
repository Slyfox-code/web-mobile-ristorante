const db = require("../db.js").getDb();
const cuid = require("cuid");

async function loadAllRistorante() {
  const ristoranti = db.get("ristoranti").value();
  return ristoranti;
}

async function loadRistorante(id) {
  const ristorante = db
    .get("ristoranti")
    .find({ id })
    .value();

  return Promise.resolve(ristorante);
}

async function createRistorante(ristorante) {
  await db
    .get("ristoranti")
    .push({
      ...ristorante,
      id: cuid()
    })
    .write();
}

async function updateRistorante(ristorante) {
  const oldRistoranti = db.get("ristoranti").value();
  db.set(
    "ristoranti",
    oldRistoranti.map(x => {
      if (x.id === id) {
        return ristorante;
      }

      return x;
    })
  ).write();
}

async function deleteRistorante(id) {
  db.set(
    "ristoranti",
    db
      .get("ristoranti")
      .filter(x => x.id !== id)
      .value()
  ).write();
}

module.exports = {
  loadAllRistorante: loadAllRistorante,
  loadRistorante: loadRistorante,
  createRistorante: createRistorante,
  updateRistorante: updateRistorante,
  deleteRistorante: deleteRistorante
};
