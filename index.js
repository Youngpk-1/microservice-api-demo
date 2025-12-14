import "dotenv/config";
import express from "express";
const app = express();
const PORT = 3001;

const WEATHER_KEY = process.env.WEATHER_KEY;

app.get("/weather/api", async (req, res) => {
  const { zipcode, date } = req.query;

  console.log(date, zipcode);
  const result = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/monroe%2C%20la?unitGroup=us&key=${WEATHER_KEY}&contentType=json&include=days`
  );
  const data = await result.json();
  console.log(data);
  res.json({
    zipcode,
    date,
    message: "Weather data retrieved successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Weather Microservice running on port ${PORT}`);
});

export default app;
