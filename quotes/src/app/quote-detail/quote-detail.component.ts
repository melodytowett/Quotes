import { Quotes } from '../quotes';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quotes;
  @Output()isComplete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
