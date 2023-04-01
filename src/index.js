

let latitude;
let longitude;
const successCallback = (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}

const errorCallback = (error) => {
    console.log(error);
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

module.exports(latitude, longitude);