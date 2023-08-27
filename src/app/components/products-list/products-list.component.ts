import { Component, OnInit } from '@angular/core';
import { ICategory, IProduct } from 'src/app/Models/store';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  providers: [ProductsService]     //only  this  componant  can  see  this  servis 

})

export class ProductsListComponent implements OnInit {
  ngOnInit(): void {
      this.afterFiltration=this.prdService.productList
   }
   dateT=new Date()
   public showimg:boolean=true;
   
  
  //  public productList: IProduct[] = [
  //   {id:1, name: 'Odense 8-Seater Top Dining Table', price: 21500, quantity:9, PrdimgURL:'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,Material:'Engineered Wood'},
  //     {id:5, name: 'Trixia 4-Seater Glass Top Table', price: 30000, quantity:8, PrdimgURL:'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,Material:'Metal'},
  //     {id:25, name: 'Gasha Marble Top Side Table', price: 14000, quantity:10, PrdimgURL:'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,Material:'Metal'},
  //     {id:7, name: 'Ventura Fabric Dining Chair', price: 1500, quantity:2, PrdimgURL:'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,Material:'Upholstered Seating'},
  //     {id:17, name: 'Ventura Fabric Dining Chair', price: 1500, quantity:2, PrdimgURL:'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,Material:'Upholstered Seating'},
  //     {id:9, name: 'Boston Study Chair', price: 1000, quantity:10, PrdimgURL:'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,Material:'Upholstered Seating'},
  //     {id:10, name: 'Coby Extendable TV Unit', price: 13000, quantity:0, PrdimgURL:'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,Material:'Wood'},
  //     {id:15, name: 'Accent TV Unit', price: 36999, quantity:4, PrdimgURL:'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,Material:'MDF'},
  //     {id:55, name: 'Plymouth TV Unit', price: 36999, quantity:3, PrdimgURL:'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,Material:'Wood'},

  // ];
  togel(){
    this.showimg=!this.showimg;
   
  }
  // function decress(item:IProduct):number{
  //   if(item.quantity>0){
  //          let newq= item.quantity -1
  //           return  newq
  // }else{
  //   console.log("h")
  // }
   
 decress(item :IProduct){
    if(item.quantity>0){
     item.quantity= item.quantity -1
     console.log(item.quantity)
    
    }else{
         
    }
  }
  selectOption:any=""
  
  vallueSearch:string = ""
  //s
  afterFiltration:IProduct[] = [];
  //s
//  this.afterFiltration=this.preformFilter(vallueSearch)



// set listFilterd(vallueSearch:string){
//   this.afterFiltration=this.preformFilter(vallueSearch)
//   console.log()
// }
// test(){
//   console.log(this.vallueSearch)
//   this.listFilterd(this.vallueSearch)
// }
// inject 

constructor(public prdService:ProductsService) {
  // this.productList=[
  //    {id:1, name: 'Odense 8-Seater Top Dining Table', price: 21500, quantity:0, PrdimgURL:'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,Material:'Engineered Wood'},
  //     {id:5, name: 'Trixia 4-Seater Glass Top Table', price: 30000, quantity:8, PrdimgURL:'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,Material:'Metal'},
  //     {id:25, name: 'Gasha Marble Top Side Table', price: 14000, quantity:10, PrdimgURL:'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:1,Material:'Metal'},
  //     {id:7, name: 'Ventura Fabric Dining Chair', price: 1500, quantity:2, PrdimgURL:'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,Material:'Upholstered Seating'},
  //     {id:17, name: 'Ventura Fabric Dining Chair', price: 1500, quantity:2, PrdimgURL:'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,Material:'Upholstered Seating'},
  //     {id:9, name: 'Boston Study Chair', price: 1000, quantity:10, PrdimgURL:'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:2,Material:'Upholstered Seating'},
  //     {id:10, name: 'Coby Extendable TV Unit', price: 13000, quantity:0, PrdimgURL:'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,Material:'Wood'},
  //     {id:15, name: 'Accent TV Unit', price: 36999, quantity:4, PrdimgURL:'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,Material:'MDF'},
  //     {id:55, name: 'Plymouth TV Unit', price: 36999, quantity:3, PrdimgURL:'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID:3,Material:'Wood'},

  // ]
  let s =new ProductsService()
  this.prdService.preformFilter(this.vallueSearch)
  this.prdService.chg()
  
  
}
//s
// preformFilter():void{
//   const value=this.vallueSearch.toLowerCase()
//   // vallueSearch=vallueSearch.toLowerCase();
//    this.afterFiltration=this.productList.filter((pro:IProduct)=>pro.name.toLowerCase().includes(value));
// }
//s

inputValue:number|null=null;
// chg(){
//   console.log(this.inputValue);
//   if(this.inputValue!==null && this.inputValue?.toString().length>16){
//     this.inputValue =  +this.inputValue.toString().slice(0,15)
    
   
//   }
// }

cata:ICategory[]=[]

}