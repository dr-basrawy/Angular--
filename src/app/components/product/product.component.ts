import { Component } from '@angular/core';
import { DiscountOffers, IProduct, Store } from 'src/app/Models/store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public discount = DiscountOffers
  public store = new Store();
  public clientName: string = ""


  // public product: IProduct = {
  //   id: 12,
  //   name: "samsong",
  //   quantity: 320,
  //   price: 20500,
  //   img: "",
  //   category: "mobile"
  // }
  


  






}


