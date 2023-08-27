import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/store';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.scss']
})
export class ProductByCategoryComponent {
  public productList:IProduct[] = [];
  public selectOption: string='';
  constructor(private productService: ProductsService){
    this.productList = this.productService.getProductsByCatID()
  }
  public onCatChange(ev: any): void {
    if(ev){
      this.productList = this.productService.getProductsByCatID(+ev.value)
    }
  }
}
