import { Quotes } from '../quotes';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quotes(0,'','');
  @Output() addQuote = new EventEmitter<Quotes>();
  submitQuote(){
    this.addQuote.emit(this.newQuote);

  } 
  constructor() { }

  ngOnInit(): void {
  }

}
