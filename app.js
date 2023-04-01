const express = require('express');
const { ftruncate } = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3900;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

let latitude;
let longitude;

// GET methods
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/index.html");
});

//showing weather data
app.post("/", (req, res) => {
    const appkey = 'fc5260af02cad34522496cf441281ac9';
    const units = 'metric';
    const url = ("https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + appkey);
    console.log(url);
     
})
app.listen(port, () => {
    console.log(`Todo is running on port ${port}`);
});