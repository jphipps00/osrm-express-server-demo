const os = require("os");

process.env.UV_THREADPOOL_SIZE = Math.ceil(os.cpus().length * 1.5);

const OSRM = require("osrm");

function loadGraph(options) {
  const opts = { path: options.osrmDataPath, 
                 algorithm: options.algorithm,
                 use_shared_memory: options.sharedMemory };
  console.log(opts);
  return new OSRM(opts);
}

module.exports = {
  loadGraph
};
