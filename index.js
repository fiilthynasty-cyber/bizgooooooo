const net = require("node:net");

function isPortAvailable(port, host = "0.0.0.0") {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.once("error", () => {
      resolve(false);
    });

    server.once("listening", () => {
      server.close(() => resolve(true));
    });

    server.listen(port, host);
  });
}

async function findAvailablePort(startPort = 3000, maxAttempts = 100) {
  for (let offset = 0; offset < maxAttempts; offset += 1) {
    const candidatePort = startPort + offset;
    // eslint-disable-next-line no-await-in-loop
    if (await isPortAvailable(candidatePort)) {
      return candidatePort;
    }
  }

  throw new Error(
    `Unable to find an available port after checking ${maxAttempts} ports from ${startPort}.`
  );
}

module.exports = {
  isPortAvailable,
  findAvailablePort,
};
