"use strict";

// Return the panorama ID
var getPanoID = function(string) {
	let value = decodeURIComponent(string).match("^https:\/\/.*\!1s(.*)\!2e.*$");

	if (value === null) {
		throw "Incorrect URL";
	}

	return "F:" + value[1];
};

// Return Embed URL to use on iframe
var getEmbed = function(string) {
	let id = getPanoID(string);
	let embedURL = "https://www.google.com/maps/embed/v1/streetview?pano=" + id + "&key=YOUR_APIKEY";

	return embedURL;
};

// Method main
var main = function(url, options) {
	try {
		options = options || {};

		if (typeof options !== "object") {
			throw "Expected an object";
		}

		return options.embed ? getEmbed(url) : getPanoID(url);
	} catch (error) {
		return error;
	}
};

module.exports = main;