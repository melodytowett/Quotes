import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-quote',
  templateUrl: './vote-quote.component.html',
  styleUrls: ['./vote-quote.component.css']
})
export class VoteQuoteComponent implements OnInit {
  numberOfVotes : number = 0;
  upvoteButtonClick(){
    this.numberOfVotes ++;
  }
  downvoteButtonClick(){
    this.numberOfVotes --;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
