import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDiscount'
})
export class CalcDiscountPipe implements PipeTransform {

  transform(value:number, discountnum:number=10): number {
  let disv=discountnum/100;
  let orignNum=value*disv;
  let sub =value-orignNum
    return sub;
  }



  
}
