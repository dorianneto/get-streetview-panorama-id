'use strict';

// Return the panorama ID
var getPanoID = function(string) {
	let value = decodeURIComponent(string).match('^https:\/\/.*\!1s(.*)\!2e.*$');

	if (value === null) {
		throw "URL incorrect";
	}

	value = 'F:' + value[1];

	return value;
};

// Return Embed URL to use on iframe
var getEmbed = function(string) {
	let id = getPanoID(string);
	let embed_url = 'https://www.google.com/maps/embed/v1/streetview?pano=' + id + '&key=YOUR_APIKEY';

	return embed_url;
};

// Method main
var main = function(url, options) {
	try {
		options = options || {};

		if (typeof options !== 'object') {
			throw "Expected an object";
		}

		if (options.embed === true) {
			return getEmbed(url);
		}

		return getPanoID(url);
	} catch (error) {
		return error;
	}
};

module.exports = main;