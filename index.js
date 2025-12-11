import express from "express";
const app = express();
const PORT = 3001;

app.get("/weather/api", (req, res) => {
  const { zipcode, date } = req.query;

    


  res.json({
    tempHigh: 73,
    tempLow: 61,
    conditions: "Partly cloudy",
    summary: "Cool with light clouds",
  });
});

app.listen(PORT, () => {
  console.log(`Weather Microservice running on port ${PORT}`);
});
