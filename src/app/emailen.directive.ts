import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmailen]'
})
export class EmailenDirective {
constructor(private element : ElementRef) { }

  @HostListener('focus') onFocus(){
    this.element.nativeElement.classList.add("bg-primary")
  }

  @HostListener('blur') onBlur(){
    this.element.nativeElement.classList.remove("bg-primary")
  }

  

}
