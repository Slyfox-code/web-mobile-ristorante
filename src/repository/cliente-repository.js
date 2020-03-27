const db = require("../db.js").getDb();
const cuid = require("cuid");

async function loadAllCliente() {
  const clienti = db.get("clienti").value();
  return clienti;
}

async function loadCliente(id) {
  const cliente = db
    .get("clienti")
    .find({ id })
    .value();

  return Promise.resolve(cliente);
}

async function createCliente(cliente) {
  await db
    .get("clienti")
    .push({
      ...cliente,
      id: cuid()
    })
    .write();
}

async function updateCliente(id, cliente) {
  const oldClienti = db.get("clienti").value();
  db.set(
    "clienti",
    oldClienti.map(x => {
      if (x.id === id) {
        return cliente;
      }

      return x;
    })
  ).write();
}

async function deleteCliente(id) {
  db.set(
    "clienti",
    db
      .get("clienti")
      .filter(x => x.id !== id)
      .value()
  ).write();
}

module.exports = {
  loadAllCliente: loadAllCliente,
  loadCliente: loadCliente,
  createCliente: createCliente,
  updateCliente: updateCliente,
  deleteCliente: deleteCliente
};
