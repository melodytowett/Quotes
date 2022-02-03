import { Quotes } from '../quotes';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quotes;
  constructor() { }

  ngOnInit(): void {
  }

}
