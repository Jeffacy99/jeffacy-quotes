import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
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

  return "Jeffacy is " + verbArray[x] + " " + placeArray[y] + " with " + withWhoArray[z] + ".";
};

const setGenerator = () => {
  firstGenerator.textContent = generateQuote();
};


firstGeneratorBtn.addEventListener('click', setGenerator);