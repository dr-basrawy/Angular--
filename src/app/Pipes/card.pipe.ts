import { IfStmt } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'card'
})
export class CardPipe implements PipeTransform {

// transform(value:number|null){
//   if (value !== null){

//     let  strvalue= value.toString()
//      console.log(strvalue);

//      for (let i = 0; i < strvalue.length; i++) {
//       if (i==3){
//         strvalue[i] += '-'
//       } 
//      }
//      return strvalue
//   }
//   return value
  
// }
transform(value: any, ...args: any[]) {
  
  if (value !== null){
   

        let  strvalue= [...value.toString()]
   
    
         for (let i = 0; i < strvalue.length; i++) {

          if (i==3||i==7||i==11) {
            strvalue[i] += '-'
          } 
         }
         return strvalue.join('');
      }
      return value

  
}












  // transform(value: any): any {
  //   // Remove any non-digit characters
  //   const cleanedValue = value.replace(/\D/g, '');
     

  //   // Split the string into groups of 4 digits
  //   const groups = cleanedValue.match(/(\d{1,4})/g);

  //   if (groups) {
  //     // Join the groups with " - " separator
  //     return groups.join(' - ');
  //   } else {
  //     // Return the original value if it cannot be formatted
  //     return value;
  //   }
  // }

// inputValue:string="1234567891234567"
// transform(inputValue: string):string {
//   return inputValue.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
  
// }

}
