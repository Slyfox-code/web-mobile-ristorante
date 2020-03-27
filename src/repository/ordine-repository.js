const db = require("../db.js").getDb();
const cuid = require("cuid");

async function loadAllOrdine() {
  const ordini = db.get("ordini").value();
  return ordini;
}

async function loadOrdine(id) {
  const ordine = db
    .get("ordini")
    .find({ id })
    .value();

  return Promise.resolve(ordine);
}

async function createOrdine(ordine) {
  await db
    .get("ordini")
    .push({
      ...ordine,
      id: cuid()
    })
    .write();
}

async function updateOrdine(ordine) {
  const oldOrdini = db.get("ordini").value();
  db.set(
    "ordini",
    oldOrdini.map(x => {
      if (x.id === id) {
        return ordine;
      }

      return x;
    })
  ).write();
}

async function deleteOrdine(id) {
  db.set(
    "ordini",
    db
      .get("ordini")
      .filter(x => x.id !== id)
      .value()
  ).write();
}

module.exports = {
  loadAllOrdine: loadAllOrdine,
  loadOrdine: loadOrdine,
  createOrdine: createOrdine,
  updateOrdine: updateOrdine,
  deleteOrdine: deleteOrdine
};
