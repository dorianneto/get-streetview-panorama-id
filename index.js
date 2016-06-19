"use strict";

// Return the panorama ID
const getPanoID = (options) => {
  let value = decodeURIComponent(options.url).match("^https:\/\/.*\!1s(.*)\!2e.*$");

  if (value === null) {
    throw "Incorrect URL";
  }

  return "F:" + value[1];
};

// Return Embed URL to use on iframe
const getEmbed = (options) => {
  let id       = getPanoID(options);
  let key      = options.key || "YOUR_APIKEY";
  let embedURL = "https://www.google.com/maps/embed/v1/streetview?pano=" + id + "&key=" + key;

  return embedURL;
};

const isObject = (item) => {
  if (typeof item !== "object") {
    throw "Expected an object";
  }
};

// Method main
function main(options) {
  try {
    options = options || {};

    isObject(options);

    return options.embed ? getEmbed(options) : getPanoID(options);
  } catch (error) {
    return error;
  }
}

module.exports = main;