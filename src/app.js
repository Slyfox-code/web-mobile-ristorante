const express = require("express");
const {loadAllCliente, loadCliente, createCliente, updateCliente, deleteCliente} = require("./repository/cliente-repository");
const {loadAllOrdine, loadOrdine, createOrdine, updateOrdine, deleteOrdine} = require("./repository/ordine-repository");
const {loadAllRistorante, loadRistorante, createRistorante, updateRistorante, deleteRistorante} = require("./repository/ristorante-repository");
const {loadAllTavolo, loadTavolo, createTavolo, updateTavolo, deleteTavolo} = require("./repository/tavolo-repository");
const {loadAllPiatto, loadPiatto, createPiatto, updatePiatto, deletePiatto} = require("./repository/piatto-repository");

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

//il nome della liberia è quello tra le parentesi
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//qui stiamo dicendo al server che quando riceve una chiamata all'url
// /ping deve chiamare la funzione file
app.get("/ping", file);

// questa funzione viene chiamata da express vedi riga 18
function file(req, res) {
  res.status(200).send({
    success: "pong" // ping e pong?
  });
}

function getParams(req) {
  return {};
}

app.get("/clienti", async (req, res) => {
  const clienti = await laodAllCliente();
  res.send(clienti);
});
app.get("/ordini", async (req, res) => {
  const ordini = await laodAllOrdine();
  res.send(ordini);
});

app.get("/ristoranti", async (req, res) => {
  const ristorante = await laodAllRistorante();
  res.send(ristoranti);
});

app.get("/tavoli", async (req, res) => {
  const tavoli = await laodAllTavolo();
  res.send(tavoli);
});

app.get("/piatti", async (req, res) => {
  const piatti = await laodAllPiatto();
  res.send(piatti);
});



app.get("/clienti/:id", async (req, res) => {
  const { id } = getParams(req);
  const cliente = await loadCliente(id);
  res.send(client);
});

// quando il server riceve la chiamata http ad esempio /ordini/12
// restituisce l'ordine con id 12
app.get("/ordini/:id", (req, res) => {
  const { id } = getParams(req);
  const ordine = await loadOrdine(id);
  res.send(ordine);
});

app.get("/piatti/:id", (req, res) => {
  const { id } = getParams(req);
  const piatto = await loadPiatto(id);
  res.send(piatto);
});
app.get("/ristoranti/:id", (req, res) => {
  const { id } = getParams(req);
  const ristorante = await loadRistorante(id);
  res.send(ristorante);
});
app.get("/tavoli/:id", (req, res) => {
  const { id } = getParams(req);
  const tavolo = await loadTavolo(id);
  res.send(tavolo);
});

app.delete("/clienti/:id", (req, res) => {
  const { id } = getParams(req);
  const cliente = await loadCliente(id);
  res.send(cliente);
});
app.delete("/ordini/:id", (req, res) => {
  const { id } = getParams(req);
  const ordine = await loadOrdine(id);
  res.send(ordine);
});
app.delete("/piatti/:id", (req, res) => {
  const { id } = getParams(req);
  const piatto = await loadPiatto(id);
  res.send(piatto);
});
app.delete("/ristoranti/:id", (req, res) => {
  const { id } = getParams(req);
  const ristorante = await loadRistorante(id);
  res.send(ristorante);
});
app.delete("/tavoli/:id", (req, res) => {
  const { id } = getParams(req);
  const tavolo = await loadTavolo(id);
  res.send(tavolo);
});

app.put("/clienti/:id", (req, res) => {
  const { id } = getParams(req);
  const cliente = await loadCliente(id);
  res.send(cliente);
});
app.put("/ordini/:id", (req, res) => {
  const { id } = getParams(req);
  const ordine = await loadOrdine(id);
  res.send(ordine);
});
app.put("/piatti/:id", (req, res) => {
  const { id } = getParams(req);
  const piatto = await loadPiatto(id);
  res.send(piatto);
});
app.put("/ristoranti/:id", (req, res) => {
  const { id } = getParams(req);
  const ristorante = await loadRistorante(id);
  res.send(ristorante);
});
app.put("/tavoli/:id", (req, res) => {
  const { id } = getParams(req);
  const tavolo = await loadTavolo(id);
  res.send(tavolo);
});
