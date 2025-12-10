import express from "express";
const app = express();
const PORT = 3001;

app.get("/weather/api", async (req, res) => {
  res.json({ message: "Welcome to the Weather Microservice!" });
});

app.listen(PORT, () => {
  console.log(`Weather Microservice running on port ${PORT}`);
});
