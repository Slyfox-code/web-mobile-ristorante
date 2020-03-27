const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
let db = low(adapter);

db.defaults({
  clienti: [],
  tavoli: [],
  ristoranti: [],
  piatti: [],
  ordini: []
}).write();

function getDb() {
  return db;
}

module.exports = {
  getDb: getDb
};
