"use strict";
import test from "ava"
import module from "../index.js"

let key      = "AIzaSyA4GC-np8of3t_II4VJMaZtzxpIWzhkaPU";
let panoID   = "F:-CkTS8qmiWLI%2FVdEDhSb4u6I%2FAAAAAAAAZKw%2FfXl6S0fV-EYAEqJfYCq_b5asuJ5iKbgcw";
let embed    = "https://www.google.com/maps/embed/v1/streetview?pano=" + panoID + "&key=YOUR_APIKEY"
let embedKey = "https://www.google.com/maps/embed/v1/streetview?pano=" + panoID + "&key=AIzaSyA4GC-np8of3t_II4VJMaZtzxpIWzhkaPU"
let url      = "https://www.google.com/maps/contrib/102203465270483008280/photos/@-43.6982751,170.0969594,3a,75y,30.47h,90t/data=!3m8!1e1!3m6!1s-CkTS8qmiWLI%2FVdEDhSb4u6I%2FAAAAAAAAZKw%2FfXl6S0fV-EYAEqJfYCq_b5asuJ5iKbgcw!2e4!3e11!6s%2F%2Flh4.googleusercontent.com%2F-CkTS8qmiWLI%2FVdEDhSb4u6I%2FAAAAAAAAZKw%2FfXl6S0fV-EYAEqJfYCq_b5asuJ5iKbgcw%2Fw203-h100-p-k-no%2F!7i14000!8i7000!4m3!8m2!3m1!1e1!6m1!1e1";

function decodeValue(value) {
  return decodeURIComponent(value);
}

test("Testing return", t => {
  let id = module({url: url});

  t.notThrows(function() {
    return id;
  });
  t.is(typeof id, "string");
});

test("Testing the panorama ID return", t => {
  t.deepEqual(module({url: url}), decodeValue(panoID));
});

test("Testing the embed url return", t => {
  let options = {
    url: url,
    embed: true
  };

  t.deepEqual(module(options), decodeValue(embed));
});

test("Testing the embed url return with API KEY", t => {
  let options = {
    url: url,
    embed: true,
    key: key
  };

  t.deepEqual(module(options), decodeValue(embedKey));
});