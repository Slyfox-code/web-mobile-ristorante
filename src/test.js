const {
  loadAllCliente,
  createCliente,
  deleteCliente,
  loadCliente,
  updateCliente
} = require("./repository/cliente-repository.js");
const {
  loadAllOrdine,
  createOrdine,
  deleteOrdine,
  loadOrdine,
  updateOrdine
} = require("./repository/ordine-repository.js");
const {
  loadAllRistorante,
  createRistorante,
  deleteRistorante,
  loadRistorante,
  updateRistorante
} = require("./repository/ristorante-repository.js");
const {
  loadAllTavolo,
  createTavolo,
  deleteTavolo,
  loadTavolo,
  updateTavolo
} = require("./repository/tavolo-repository.js");
const {
  loadAllPiatto,
  createPiatto,
  deletePiatto,
  loadPiatto,
  updatePiatto
} = require("./repository/piatto-repository.js");

async function test() {
  await createCliente({ firstName: "eva", lastName: "kant" });
  const clienti = await loadAllCliente();

  console.dir(clienti);

  await createOrdine({ firstName: "eva", lastName: "kant" });
  const ordini = await loadAllOrdine();

  console.dir(ordini);

  await createRistorante({ firstName: "eva", lastName: "kant" });
  const ristoranti = await loadAllRistorante();

  console.dir(ristoranti);

  await createTavolo({ firstName: "eva", lastName: "kant" });
  const tavoli = await loadAllTavolo();

  console.dir(tavoli);

  await createPiatto({ firstName: "eva", lastName: "kant" });
  const piatti = await loadAllPiatto();

  console.dir(piatti);
}

test();
