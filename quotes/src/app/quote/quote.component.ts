import { Quotes } from '../quotes';
import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';
//import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  //styleUrls: ['./quote.component.css']
  styles:['li{color:red}']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes(1,'formal education will make you a living, self education will make you a fortune', "",'By Jim Rhon',new Date(2012,2,1)),
    new Quotes(2,'quote of the day', "",'By Mark', new Date(2020,1,3)),
    new Quotes(3,'better half than none',"", 'By john', new Date(2021,3,2)),
   new Quotes(4,'better half than none', "", 'By Melo', new Date(2019,2,3)),
    new Quotes(5,'better half than none', "",'By Marn', new Date(2019,2,10)),
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete = confirm('delete Goal')
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription
  }
  constructor() { }

  ngOnInit(): void {
  }

}
