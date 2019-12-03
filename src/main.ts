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
  'sleeping',
  'rolling',
  'eating Pho',
  'playing Mario',
  'watching Netflix',
  'doodling'
];

const placeArray = [
  'on the top of Mt.Fuji',
  'on the top of Eiffel Tower',
  'on the beach',
  'on the Moon',
  'inside Space Shuttle'
];

const withWhoArray = [
  'thirty kittens',
  'twenty puppies',
  'fifty rabbits',
  'moose',
  'bear',
  'flock of sheep',
  'pack of wolves'
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
import { AppComponent } from 'src/app/app.component';

describe('app.component', () => {
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
/* Get DOM elements */
const firstQuoteBtn = document.getElementById('firstQuoteBtn');
const howManyQuoteOne = document.getElementById('howManyQuoteOne');
const popularQuotesField = document.getElementById('popularQuotesField');

const secondQuoteBtn = document.getElementById('secondQuoteBtn');
const howManyQuoteTwo = document.getElementById('howManyQuoteTwo');
const programQuotesField = document.getElementById('programQuotesField');


/* Popular Quotes */
const popuparQuoteArray = [
  {
    quote: 'kaa na mama yako.',
    name: 'ochungulu'
  },
  {
    quote: 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',
    name: 'Dr. Seuss'
  },
  {
    quote: 'The fear of death follows from the fear of life. A man who loves fully is prepared to die at any time.',
    name: 'Mark Twain'
  },
  {
    quote: 'Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. So throw off the bowlines, Sail away from the safe harbor, Catch the trade winds in your sails. Explore. Dream. Discover.',
    name: 'Mark Twain'
  },
  {
    quote: 'Remember, happiness doesn\'t depend upon who you are or what you have, it depends solely upon what you think.',
    name: 'Dale Carnegie'
  },
  {
    quote: 'We are all in the gutter, but some of us are looking at the stars.',
    name: 'Oscar Wilde'
  },
  {
    quote: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.',
    name: 'Thomas A. Edison'
  },
  {
    quote: 'I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.',
    name: 'Dr. Seuss'
  },
  {
    quote: 'The only man who never makes mistakes is the man who never does anything.',
    name: 'Theodore Roosevelt'
  },
  {
    quote: 'The secret of getting ahead is getting started.',
    name: 'Mark Twain'
  },
  {
    quote: 'We\'re all a little weird. And life is a little weird. And when we find someone whose weirdness is compatible with ours, we join up with them and fall into mutually satisfying weirdness – and call it love – true love.',
    name: 'Robert Fulghum'
  },
  {
    quote: 'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
    name: 'Lao Tzu'
  },
  {
    quote: 'In order to be irreplaceable, one must always be different.',
    name: 'Coco Chanel'
  },
  {
    quote: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.',
    name: 'Steve Jobs'
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    name: 'Eleanor Roosevelt'
  },
  {
    quote: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.',
    name: 'Oprah Winfrey'
  },
  {
    quote: 'Always remember that you are absolutely unique. Just like everyone else.',
    name: 'Margaret Mead'
  },
  {
    quote: 'Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
    name: 'Robert Louis Stevenson'
  },
  {
    quote: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
    name: 'Helen Keller'
  },
  {
    quote: 'It is during our darkest moments that we must focus to see the light.',
    name: 'Aristotle'
  },
  {
    quote: 'The only person you are destined to become is the person you decide to be.',
    name: 'Ralph Waldo Emerson'
  }
];


/* Programming Quotes */
const programmingQuoteArray = [
  {
    quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    name: 'Martin Fowler'
  },
  {
    quote: 'Without requirements or design, programming is the art of adding bugs to an empty text file.',
    name: 'Louis Srygley'
  },
  {
    quote: 'Before software can be reusable it first has to be usable.',
    name: 'Ralph Johnson'
  },
  {
    quote: 'First, solve the problem. Then, write the code.',
    name: 'John Johnson'
  },
  {
    quote: 'Java is to JavaScript what car is to Carpet.',
    name: 'Chris Heilmann'
  },
  {
    quote: 'It\'s not a bug – it\'s an undocumented feature.',
    name: 'Anonymous'
  },
  {
    quote: 'A good programmer is someone who always looks both ways before crossing a one-way street.',
    name: 'Doug Linder'
  },
  {
    quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    name: 'Martin Golding'
  },
  {
    quote: 'Deleted code is debugged code.',
    name: 'Jeff Sickel'
  },
  {
    quote: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
    name: 'Edsger Dijkstra'
  },
  {
    quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning.',
    name: 'Rick Cook'
  },
  {
    quote: 'It\'s a curious thing about our industry: not only do we not learn from our mistakes, but we also don\'t learn from our successes.',
    name: 'Keith Braithwaite'
  },
  {
    quote: 'There are only two kinds of programming languages: those people always bitch about and those nobody uses.',
    name: 'Bjarne Stroustrup'
  },
  {
    quote: 'The cheapest, fastest, and most reliable components are those that aren\'t there.',
    name: 'Gordon Bell'
  },
  {
    quote: 'The best performance improvement is the transition from the nonworking state to the working state.',
    name: 'J. Osterhout'
  },
  {
    quote: 'The trouble with programmers is that you can never tell what a programmer is doing until it\'s too late.',
    name: 'Seymour Cray'
  },
  {
    quote: 'Don\'t worry if it doesn\'t work right. If everything did, you\'d be out of a job.',
    name: 'Mosher\'s Law of Software Engineering'
  },
  {
    quote: 'Experience is the name everyone gives to their mistakes.',
    name: 'Oscar Wilde'
  },
  {
    quote: 'Knowledge is power.',
    name: 'Francis Bacon'
  },
  {
    quote: 'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday\'s code.',
    name: 'Dan Salomon'
  },
  {
    quote: 'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.',
    name: 'Antoine de Saint-Exupery'
  },
  {
    quote: 'Ruby is rubbish! PHP is phpantastic!',
    name: 'Nikita Popov'
  },
  {
    quote: 'Code is like humor. When you have to explain it, it\'s bad.',
    name: 'Cory House'
  },
  {
    quote: 'Fix the cause, not the symptom.',
    name: 'Steve Maguire'
  },
  {
    quote: 'Optimism is an occupational hazard of programming: feedback is the treatment.',
    name: 'Kent Beck'
  },
  {
    quote: 'When to use iterative development? You should use iterative development only on projects that you want to succeed.',
    name: 'Martin Fowler'
  },
  {
    quote: 'Simplicity is the soul of efficiency.',
    name: 'Austin Freeman'
  },
  {
    quote: 'Before software can be reusable it first has to be usable.',
    name: 'Ralph Johnson'
  },
  {
    quote: 'Make it work, make it right, make it fast.',
    name: 'Kent Beck'
  }
];


/* Get array of unique idexes */
// Array of unique index for quote
let indexArrays = [];

// Generate array of unique index numbers
// (selectInput, selectQuoteArray)
const getIndexes = (quantity, quote) => {
  indexArrays = [];
  let uniqueIndexes = [];

  while(indexArrays.length < quantity.value) {
    // Add number to array
    const selectIndexes = () => {
      let number = Math.floor(Math.random() * quote.length);
      indexArrays.push(number);
    };

    selectIndexes();
    uniqueIndexes = Array.from(new Set(indexArrays));
    indexArrays = uniqueIndexes;
  }
};

/* Generate quote */
const setQuote = (whereTo, quateArray, quantity) => {
  // Clear all the previous quotes
  if(whereTo.childElementCount > 0) {
    whereTo.innerHTML = '';
  }

  // Generate ul element
  const quoteLists = document.createElement('ul');
  quoteLists.setAttribute('class','quoteLists');
  whereTo.append(quoteLists);

  // Generate quote to DOM
  const generateQuote = (x) => {
    const quoteItem = document.createElement('li');
    const quoteName = document.createElement('strong');
    quoteLists.append(quoteItem);
    quoteLists.append(quoteName);
    quoteItem.textContent = quateArray[x].quote;
    quoteName.textContent = '- ' + quateArray[x].name;
  };

  // Generate unique indexes
  getIndexes(quantity, quateArray);

  // Generate DOM element for each quote
  for(let index of indexArrays) {
    generateQuote(index);
  }
};

/* Event Listeners */
firstQuoteBtn.onclick = e => {
  e.preventDefault();
  setQuote(popularQuotesField, popuparQuoteArray, howManyQuoteOne);
};

secondQuoteBtn.onclick = e => {
  e.preventDefault();
  setQuote(programQuotesField, programmingQuoteArray, howManyQuoteTwo);
};
