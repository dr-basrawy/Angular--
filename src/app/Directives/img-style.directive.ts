import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ImgStyle]'
})



export class ImgStyleDirective {
   @Input() radiud1 : string ="100px"
 @Input('ImgStyle') radiud2 : string ="50px"
  constructor(private elementRef:ElementRef  ) {
    // elementRef.nativeElement.style.borderRadius ="20px";
   }
   ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.elementRef.nativeElement.style.borderRadius =`${this.radiud2}`;

    
   }
   @HostListener('mouseover') fun1(){
   this.elementRef.nativeElement.style.borderRadius =`${this.radiud1}`;
   this.elementRef.nativeElement.style.opacity ='.8'

   }
   @HostListener('mouseout') fun2(){
    this.elementRef.nativeElement.style.borderRadius =`${this.radiud2}`;
    this.elementRef.nativeElement.style.opacity ='1'

   }

}
