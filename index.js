import "dotenv/config";
import express from "express";
const app = express();
const PORT = 3001;

const WEATHER_KEY = process.env.WEATHER_KEY;

app.get("/weather/api", async (req, res) => {
  const clientKey = req.headers["x-api-key"];
  const validKey = process.env.SERVICE_KEY;
  console.log(`Received Client Key: ${clientKey ? "present" : "missing"}`);
  if (!clientKey || clientKey !== validKey) {
    return res.status(401).json({ error: "Unauthorized: Invalid API Key" });
  }

  const { zipcode, date } = req.query;

  if (!zipcode || !date) {
    return res
      .status(400)
      .json({ error: "Please provide both zipcode and date." });
  }

  console.log(date, zipcode);
  const result = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zipcode}/${date}?key=${WEATHER_KEY}&contentType=json`
  );

  const data = await result.json();
  console.log(data);

  const days = data.days.filter((day) => day.datetime === date);

  const weather = days.map((day) => ({
    date: day.datetime,
    temp: day.temp,
  }));

  // const dayData = data.days[0];
  // const weather = {
  //   date: dayData.datetime,
  //   tempmax: dayData.tempmax,
  //   tempmin: dayData.tempmin,
  //   temp: dayData.temp,
  //   description: dayData.conditions,
  // };
  res.json(weather);
});

app.listen(PORT, () => {
  console.log(`Weather Microservice running on port ${PORT}`);
});

export default app;
