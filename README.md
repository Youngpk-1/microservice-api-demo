# Weather Microservice 🌦️

This microservice acts as a wrapper around the **Visual Crossing Weather API**, providing a simplified and secure interface for retrieving weather data.  
It is designed for **machine-to-machine communication** and is not intended to be accessed directly by browsers.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
2. Install dependencies

bash


npm install
3. Configure environment variables
Create a .env file in the project root (see Configuration below).

4. Start the server
bash

node index.js

⚙️ Configuration
Create a .env file in the root of the project:

WEATHER_KEY=your_visual_crossing_api_key
SERVICE_KEY=your_microservice_api_key
PORT=3001
Environment Variables
Variable	Description
WEATHER_KEY	Visual Crossing Weather API key
SERVICE_KEY	API key used to authenticate requests to this microservice
PORT	Port the server runs on

📡 API Reference
GET /weather
Returns weather data for a specific location and date.

🔐 Headers
Header	Required	Description
X-API-KEY	Yes	Your microservice API key

🔎 Query Parameters
Parameter	Required	Description
zip	Yes	5-digit US ZIP code
date	Yes	Date in YYYY-MM-DD format

📌 Example Request

GET http://localhost:3001/weather?zip=90210&date=2024-07-04
X-API-KEY: your_service_key

❌ Error Responses
Status	Description	Example
400	Missing required parameters	{ "error": "zip and date are required" }
401	Invalid or missing API key	{ "error": "Not authorized" }
500	External API error	{ "error": "Failed to fetch weather data" }

```
