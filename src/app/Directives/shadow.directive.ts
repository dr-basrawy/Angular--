import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  constructor(private elementRef:ElementRef) {
    
  }
@HostListener('mouseenter') onmuseenter() {
 
  // this.elementRef.nativeElement.style= '20px'
  this.elementRef.nativeElement.style.boxShadow='1px 1px 75px gray';

}
@HostListener('mouseout') onmuseout() {
 
  // this.elementRef.nativeElement.style= '20px'
  this.elementRef.nativeElement.style.boxShadow='none';
  console.log("mouse")

}
}
