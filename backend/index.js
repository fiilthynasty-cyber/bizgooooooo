import express from "express";
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
