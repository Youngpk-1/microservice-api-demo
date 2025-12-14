
import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../index.js";

describe("GET /weather/api", () => {
  it("should return weather data for given zipcode and date", async () => {
    const response = await request(app)
      .get("/weather/api")
      .query({ zipcode:"", date: "" });
     console.log(response.body);
    expect(response.status).toBe(200);
  });
  expect(response.body).toEqual({
    tempHigh: 73,
    tempLow: 61,
    conditions: "Partly cloudy",
    summary: "Cool with light clouds",
  });
});
