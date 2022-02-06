import { Component, Input, OnInit } from '@angular/core';
import { VoteDirective } from '../vote.directive';

@Component({
  selector: 'app-vote-quote',
  templateUrl: './vote-quote.component.html',
  styleUrls: ['./vote-quote.component.css']
})
export class VoteQuoteComponent implements OnInit {
  numberOfVotes : number = 0;
  upvoteButtonClick(){
    this.numberOfVotes ++;
    if(this.numberOfVotes>5){
      
    }
  }
  downvoteButtonClick(){
    this.numberOfVotes --;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
