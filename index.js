import "dotenv/config";
import express from "express";
const app = express();
const PORT = 3001;

const WEATHER_KEY = process.env.WEATHER_KEY;

app.get("/weather/api", async (req, res) => {
  const { zipcode, date } = req.query;

  console.log(date, zipcode);
  const result = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zipcode}/${date}?key=${WEATHER_KEY}&contentType=json`
  );

  const data = await result.json();
  console.log(data);
  const dayData = data.days[0];
  const weather = {
    date: dayData.datetime,
    tempmax: dayData.tempmax,
    tempmin: dayData.tempmin,
    temp: dayData.temp,
    description: dayData.conditions,
  };
  res.json(weather);
});

app.listen(PORT, () => {
  console.log(`Weather Microservice running on port ${PORT}`);
});

export default app;
