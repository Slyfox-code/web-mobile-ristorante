const db = require("../db.js").getDb();
const cuid = require("cuid");

async function loadAllPiatto() {
  const piatti = db.get("piatti").value();
  return piatti;
}

async function loadPiatto(id) {
  const piatto = db
    .get("piatti")
    .find({ id })
    .value();

  return Promise.resolve(piatto);
}

async function createPiatto(piatto) {
  await db
    .get("piatti")
    .push({
      ...piatto,
      id: cuid()
    })
    .write();
}

async function updatePiatto(piatto) {
  const oldPiatto = db.get("piatti").value();
  db.set(
    "piatti",
    oldPiatto.map(x => {
      if (x.id === id) {
        return piatto;
      }

      return x;
    })
  ).write();
}

async function deletePiatto(id) {
  db.set(
    "piatti",
    db
      .get("piatti")
      .filter(x => x.id !== id)
      .value()
  ).write();
}

module.exports = {
  loadAllPiatto: loadAllPiatto,
  loadPiatto: loadPiatto,
  createPiatto: createPiatto,
  updatePiatto: updatePiatto,
  deletePiatto: deletePiatto
};
