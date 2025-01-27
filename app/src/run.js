const logfmt = require("logfmt");
const app = require("./app");
const fs = require('fs');
console.log(fs.readdirSync('/data/'));

const server = app.createServer({ osrmDataPath: process.env.OSRM_GRAPH,
                                  sharedMemory: process.env.SHARED_MEMORY || false,
                                  algorithm: process.env.ALGORITHM || "CH" });

server.listen(5000, () => {
  logfmt.log({ "start": "running server",
               "address": server.address().address,
               "port": server.address().port,
               "osrm-dataset": process.env.OSRM_GRAPH
             });
});
