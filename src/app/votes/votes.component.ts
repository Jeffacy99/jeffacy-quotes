import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
@Output() voteQuotes=new EventEmitter<boolean>();
 numberOfUpvote=0;
 numberOfDvote=0;
 upVotes(){
   this.numberOfUpvote++;
 }
 downVotes(){
   this.numberOfDvote++;
 }

 deleteQuote(del: boolean){
   this.voteQuotes.emit(del);
 }

  constructor() { }

  ngOnInit() {
  }

}
