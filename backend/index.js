const express = require("express");

const app = express();
const port = Number(process.env.PORT) || 5000;

app.get("/", (_req, res) => {
  res.send("Backend running");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Backend running on http://0.0.0.0:${port}`);
});
