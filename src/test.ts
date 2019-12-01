// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
/* Get DOM elements */
const firstGeneratorBtn = document.querySelector('.firstGeneratorBtn');
const firstGenerator = document.querySelector('.firstGenerator');


/* First Generator */
const verbArray = [
  "sleeping",
  "rolling",
  "eating Pho",
  "playing Mario",
  "watching Netflix",
  "doodling"
];

const placeArray = [
  "on the top of Mt.Fuji",
  "on the top of Eiffel Tower",
  "on the beach",
  "on the Moon",
  "inside Space Shuttle"
];

const withWhoArray = [
  "thirty kittens",
  "twenty puppies",
  "fifty rabbits",
  "moose",
  "bear",
  "flock of sheep",
  "pack of wolves"
];

const generateQuote = () => {
  let x = Math.floor(Math.random() * verbArray.length);
  let y = Math.floor(Math.random() * placeArray.length);
  let z = Math.floor(Math.random() * withWhoArray.length);

  return "Kaoru is " + verbArray[x] + " " + placeArray[y] + " with " + withWhoArray[z] + ".";
};

const setGenerator = () => {
  firstGenerator.textContent = generateQuote();
};


firstGeneratorBtn.addEventListener('click', setGenerator);