import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/store';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})





export class ShowProductsComponent implements OnInit {
  @Input() detailsRoute = 'product'
  @Input() products: IProduct[] = [];
  public showimg: boolean = true;

  @Output() cartProducts = new EventEmitter<IProduct>();

  constructor(private route:Router) {}

  ngOnInit(): void {
    console.log('products: ', this.products)
  }

  togel() {
    this.showimg = !this.showimg;

  }

  decress(item: IProduct) {
    if (item.quantity > 0) {
      item.quantity = item.quantity - 1;
      this.cartProducts.emit(item)

    }
  }
  displayProductDetails(prdID: number): void {
    this.route.navigate([this.detailsRoute,prdID]).then(
      ()=>{
        console.log('navigation is completed')
      }
    )
  }

}
