import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/store';
import { NewProductService } from 'src/app/Services/new-product-service';
import { ICategory } from 'src/app/Models/category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  public errMessage: string | null = null;
  public id: number = 0
  public product: IProduct | null = null;
  public allCategories: ICategory[]=[];

  constructor(private route: Router,private activRoute: ActivatedRoute, private prdService: NewProductService, private catService: CategoryService) { }
  ngOnInit(): void {
    this.id = this.activRoute.snapshot.params['id'];
    this.getCats();
    this.getProductDetails();
  }

  getCats(){
    this.catService.getAllCategories().subscribe(cats=>{
      this.allCategories = cats
    })
  }
  getProductDetails(){
    this.prdService.getProductByID(this.id).subscribe(res => {
      this.product = res
    })
  }

  submit(){
    const confirmation: boolean = confirm('Are you sure you want to update this product?')
    if(confirmation && this.product){
      this.prdService.updateProduct(this.product).subscribe(res=>{
        this.route.navigate(['admin'])
      })
    }
  }

}
