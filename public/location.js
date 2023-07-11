//
// // getting latitude and longitude of user
// let lat, lon;
// if(navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//         lat = position.coords.latitude;
//         lon = position.coords.longitude;
//         console.log([lat, lon]);
//     },
//         (error) => {
//         console.error("Error: ", error.message);
//         });
// }
// else {
//     alert("The navigator object is not supported by the browser.");
// }
//
// // document.querySelector(".lat").innerText = lat;
// // document.querySelector(".lon").innerText = lon;
//
// module.exports = {lat, lon};