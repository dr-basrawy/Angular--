import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/store';
import { CategoryService } from 'src/app/Services/category.service';
import { NewProductService } from 'src/app/Services/new-product-service';
import { ICategory } from 'src/app/Models/category';
@Component({
  selector: 'app-products-by-json-server',
  templateUrl: './products-by-json-server.component.html',
  styleUrls: ['./products-by-json-server.component.scss']
})
export class ProductsByJsonServerComponent implements OnInit {
  public productList: IProduct[] = [];
  public selectOption: string = '';
  public allCategories: ICategory[] = [];
  constructor(private jsonService: NewProductService, private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.getAllProducts();
    this.categoryService.getAllCategories().subscribe(res=>{
      this.allCategories = res
    })
  }

  getAllProducts():void{
    this.jsonService.getAllProducts().subscribe((res) => {
      this.productList = res
    })
  }
  
  public onCatChange(ev: any): void {
    if(ev.value === 'all'){
      this.getAllProducts()
    }else{
      this.jsonService.getProductsByCatID(ev.value).subscribe(res => {
        this.productList = res
      })

    }
  }
}
