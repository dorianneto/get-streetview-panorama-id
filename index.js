"use strict";

// Return the panorama ID
const getPanoID = (url) => {
	let value = decodeURIComponent(url).match("^https:\/\/.*\!1s(.*)\!2e.*$");

	if (value === null) {
		throw "Incorrect URL";
	}

	return "F:" + value[1];
};

// Return Embed URL to use on iframe
const getEmbed = (url) => {
	let id = getPanoID(url);
	let embedURL = "https://www.google.com/maps/embed/v1/streetview?pano=" + id + "&key=YOUR_APIKEY";

	return embedURL;
};

const isObject = (item) => {
	if (typeof item !== "object") {
		throw "Expected an object";
	}
};

// Method main
function main(url, options) {
	try {
		options = options || {};

		isObject(options);

		return options.embed ? getEmbed(url) : getPanoID(url);
	} catch (error) {
		return error;
	}
}

module.exports = main;