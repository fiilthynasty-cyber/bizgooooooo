const net = require("net");

function isPortAvailable(port, host = "127.0.0.1") {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.once("error", (error) => {
      if (error && (error.code === "EADDRINUSE" || error.code === "EACCES")) {
        resolve(false);
        return;
      }
      reject(error);
    });

    server.once("listening", () => {
      server.close((closeError) => {
        if (closeError) {
          reject(closeError);
          return;
        }
        resolve(true);
      });
    });

    server.listen(port, host);
  });
}

async function findAvailablePort(startPort = 3000, host = "127.0.0.1") {
  if (!Number.isInteger(startPort) || startPort < 0 || startPort > 65535) {
    throw new RangeError("startPort must be an integer between 0 and 65535");
  }

  for (let port = startPort; port <= 65535; port += 1) {
    if (await isPortAvailable(port, host)) {
      return port;
    }
  }

  throw new Error(`No available ports found from ${startPort} to 65535`);
}

module.exports = {
  isPortAvailable,
  findAvailablePort,
};
