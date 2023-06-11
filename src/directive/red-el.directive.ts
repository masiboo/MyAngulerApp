import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[redEl]'
})
export class RedElDirective {

  constructor(el: ElementRef){
    el.nativeElement.style.color = "red";
}

}
