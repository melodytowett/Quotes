import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appVote]'
})
export class VoteDirective {

  constructor(private elem:ElementRef) { }
  
    @HostListener("upvoteButtonClick")onclick(){
      this.textDeco("line-through")
    }
    // @HostListener("downVoteButtonClick")onClick(){
    //   this.textDeco("none")
    // }
  
    private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
   }
   
}

