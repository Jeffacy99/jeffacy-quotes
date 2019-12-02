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
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'quotes-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('quotes-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('quotes-app app is running!');
  });
});
