import { Quotes } from '../quotes';
import { Component, OnInit } from '@angular/core';
//import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes(1,'better half than none', 'By Martin'),
    new Quotes(2,'quote of the day', 'By Mark'),
    new Quotes(3,'better half than none', 'By john'),
   new Quotes(4,'better half than none', 'By Melo'),
    new Quotes(5,'better half than none', 'By Marn'),
  ]

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription
  }
  constructor() { }

  ngOnInit(): void {
  }

}
