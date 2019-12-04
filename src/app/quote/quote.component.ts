import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {



  quotes:Quote [] = [
  new Quote(1, 'Arsene Wenger', 'Never settle for less,keep striving sio rahisi.',new Date(2019,7,12)),
  new Quote(2, 'Ochungulu family', 'Kama Hakuna kaa ....',new Date(2019,10,7)),
  new Quote(3, 'Albert Einstein' ,  'Why not be the best if the chance is there',new Date(2019,11,21))
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.date = new Date(quote.date);
    this.quotes.push(quote);
  }

  deletedQuote(voteQuotes, index){
    if (voteQuotes) {
      const toDelete = confirm(`Delete ${this.quotes[index].author} ?`)
    // this.goals.splice(index,1);

    if (toDelete){
      this.quotes.splice(index,1)
    }
    }
  }
  constructor() {}
  ngOnInit() {
  }

}
