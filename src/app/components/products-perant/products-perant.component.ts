// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/store';

@Component({
  selector: 'app-products-perant',
  templateUrl: './products-perant.component.html',
  styleUrls: ['./products-perant.component.scss']
})
export class ProductsPerantComponent implements OnInit {

  vallueSearch: string = ""
  afterFiltration: IProduct[] = [];
  newproduct: IProduct[] = [];
  public totalPrice: number = 0;
  public totalCount: number = 0;

  public productList: IProduct[] = [
    { id: 1, name: 'Odense 8-Seater Top Dining Table', price: 21500, quantity: 9, PrdimgURL: 'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 1, Material: 'Engineered Wood' },
    { id: 5, name: 'Trixia 4-Seater Glass Top Table', price: 30000, quantity: 8, PrdimgURL: 'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 1, Material: 'Metal' },
    { id: 25, name: 'Gasha Marble Top Side Table', price: 14000, quantity: 10, PrdimgURL: 'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 1, Material: 'Metal' },
    { id: 7, name: 'Ventura Fabric Dining Chair', price: 1500, quantity: 2, PrdimgURL: 'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 2, Material: 'Upholstered Seating' },
    { id: 17, name: 'Ventura Fabric Dining Chair', price: 1500, quantity: 2, PrdimgURL: 'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 2, Material: 'Upholstered Seating' },
    { id: 9, name: 'Boston Study Chair', price: 1000, quantity: 10, PrdimgURL: 'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 2, Material: 'Upholstered Seating' },
    { id: 10, name: 'Coby Extendable TV Unit', price: 13000, quantity: 0, PrdimgURL: 'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 3, Material: 'Wood' },
    { id: 15, name: 'Accent TV Unit', price: 36999, quantity: 4, PrdimgURL: 'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 3, Material: 'MDF' },
    { id: 55, name: 'Plymouth TV Unit', price: 36999, quantity: 3, PrdimgURL: 'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 3, Material: 'Wood' },

  ];
  ngOnInit(): void {
    this.afterFiltration = this.productList;
  }
  priceformFilter(): void {
    console.log(this.vallueSearch)
    this.afterFiltration = this.productList.filter(item => item.price <= +this.vallueSearch)
  }
  // cart:IProduct[] = [];
  public getProductFromChild(prd: IProduct): void {

    if(this.newproduct.find(item=> item.id === prd.id)){
      prd.count ? prd.count ++ : prd.count = 1
    }else{
      prd.count = 1; 
      this.newproduct.push(prd)
    }
    this.updateCountAndPrice()

    // console.log(prd)

    // this.newproduct.push(prd);
    // console.log(prd)
    // if (!this.newproduct.find(p => p.id == prd.id)) {
    //   this.newproduct.push(prd);
    //   prd.quantity = 0;
    //   prd.quantity++;
    // } else {
    //   prd.quantity += 1
    //   this.count++
    // }



  }
  public updateCountAndPrice(){
    this.totalPrice = 0
    this.totalCount = 0
    this.newproduct.forEach(item=>{
      if(item.count){
        this.totalPrice += item.count * item.price;
        this.totalCount += item.count
      }
    })
  }

  public removeProduct(id: number){
    this.newproduct = this.newproduct.filter(item => item.id !== id);
    this.updateCountAndPrice()
  }


}
