const db = require("../db.js").getDb();
const cuid = require("cuid");

async function loadAllTavolo() {
  const tavoli = db.get("tavoli").value();
  return tavoli;
}

async function loadTavolo(id) {
  const tavolo = db
    .get("tavoli")
    .find({ id })
    .value();

  return Promise.resolve(tavolo);
}

async function createTavolo(tavolo) {
  await db
    .get("tavoli")
    .push({
      ...tavolo,
      id: cuid()
    })
    .write();
}

async function updateTavolo(tavolo) {
  const oldTavoli = db.get("tavoli").value();
  db.set(
    "tavoli",
    oldTavoli.map(x => {
      if (x.id === id) {
        return tavolo;
      }

      return x;
    })
  ).write();
}

async function deleteTavolo(id) {
  db.set(
    "tavoli",
    db
      .get("tavoli")
      .filter(x => x.id !== id)
      .value()
  ).write();
}

module.exports = {
  loadAllTavolo: loadAllTavolo,
  loadTavolo: loadTavolo,
  createTavolo: createTavolo,
  updateTavolo: updateTavolo,
  deleteTavolo: deleteTavolo
};
