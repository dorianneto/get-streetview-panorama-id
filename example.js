"use strict";
const getStreetViewPanoId = require("./");

let key = "AIzaSyA4GC-np8of3t_II4VJMaZtzxpIWzhkaPU";
let url = "https://www.google.com/maps/contrib/102203465270483008280/photos/@-43.6982751,170.0969594,3a,75y,30." +
          "47h,90t/data = !3m8!1e1!3m6!1s-CkTS8qmiWLI%2FVdEDhSb4u6I%2FAAAAAAAAZKw%2FfXl6S0fV-EYAEqJfYCq_b5asuJ5" +
          "iKbgcw!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F-CkTS8qmiWLI%2FVdEDhSb4u6I%2FAAAAAAAAZKw%2FfXl6S" +
          "0fV-EYAEqJfYCq_b5asuJ5iKbgcw%2Fw203-h100-p-k-no%2F!7i14000!8i7000!4m3!8m2!3m1!1e1!6m1!1e1";

console.log("Pano ID: " + getStreetViewPanoId({
    url: url
}) + "\n");
/*
Pano ID: F:-CkTS8qmiWLI/VdEDhSb4u6I/AAAAAAAAZKw/fXl6S0fV-EYAEqJfYCq_b5asuJ5iKbgcw
*/

console.log("Embed URL: " + getStreetViewPanoId({
    url: url,
    embed: true
}) + "\n");
/*
Embed URL: https://www.google.com/maps/embed/v1/streetview?pano=F:-CkTS8qmiWLI/VdEDhSb4u6I/AAAAAAAAZKw/fXl6S0fV-EYAEqJfYCq_b5asuJ5iK
bgcw&key=YOUR_APIKEY
*/

console.log("Embed URL with API KEY: " + getStreetViewPanoId({
    url: url,
    embed: true,
    key: key
}));
/*
Embed URL: https://www.google.com/maps/embed/v1/streetview?pano=F:-CkTS8qmiWLI/VdEDhSb4u6I/AAAAAAAAZKw/fXl6S0fV-EYAEqJfYCq_b5asuJ5iK
bgcw&key=AIzaSyA4GC-np8of3t_II4VJMaZtzxpIWzhkaPU
*/