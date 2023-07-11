const token = process.env.TOKEN;
const express = require("express");
const { ftruncate } = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const { request } = require("http");
const axios = require('axios');
const geoip = require('geoip-lite');
const app = express();
app.use(express.json());

const port = process.env.PORT || 3900;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// GET methods
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/homepage.html");
});

//showing weather data
let ipAddress;
 getIPAddress = async () => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    ipAddress = response.data.ip;
  } catch (error) {
    console.error('Error retrieving IP address:', error.message);
    return null;
  }
};

 getIPAddress();

const getGeoLocation = (ip) => {
  const geo = geoip.lookup(ip);
  if(geo) {
    const {ll} = geo;
    const [latitude, longitude] = ll;
    return {latitude, longitude};
  }
  return null;
};

const ip = ipAddress;
let latitude, longitude;

const location = getGeoLocation(ip);
if(location) {
  latitude = location.latitude;
  longitude = location.longitude;
  console.log('Latitude: ', latitude);
  console.log('Longitude: ', longitude);
} else {
  console.error('Unable to determine location.');
}

app.post("/", (req, res) => {

  const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + token;
  console.log(url);
});

app.listen(port, () => {
  console.log(`Todo is running on port ${port}`);
});