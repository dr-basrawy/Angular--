import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/Models/category';
import { IProduct } from 'src/app/Models/store';
import { CategoryService } from 'src/app/Services/category.service';
import { NewProductService } from 'src/app/Services/new-product-service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit{
  public editMode: boolean = false;
  public errMessage: string | null = null;
  public product:IProduct = {
    id: 500,
    name: 'New Product',
    quantity: 2,
    price: 3000,
    PrdimgURL: 'https://th.bing.com/th/id/R.2427afa6a5b5d2f9c3350bbb66d3afba?rik=Q6FTDQ2vN1Jh1g&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2ff%2ffa%2fIPhone_5.png&ehk=uzN6IpGKiq9YAfXSiqjUi7Hh9EhW%2b7grArl1CDHzsZY%3d&risl=&pid=ImgRaw&r=0',
    categoryID: 1,
    Material: 'Iron',
    description: 'static description'
  }
  public allCategories: ICategory[]=[];

  constructor(private activatedRoute: ActivatedRoute,private allCats: CategoryService, private jsonService: NewProductService, private router:Router) {}
  ngOnInit(): void {
    if(this.activatedRoute.snapshot.params['id']){
      this.editMode = true;
      this.getProductDetails(this.activatedRoute.snapshot.params['id']);

    }

    this.allCats.getAllCategories().subscribe(res=>{
      this.allCategories = res
    })
  }

  public getProductDetails(id: number){
    this.jsonService.getProductByID(id).subscribe(res => {
      this.product = res
    })
  }


  public submit():void {
    this.jsonService.createNewProduct(this.product).subscribe(res=>{
      this.router.navigate(['products-by-json-server'])
    },err=>{
      this.errMessage = err.error.split("\n")[0]
    })
  }

  public edit(){
    const confirmation: boolean = confirm('Are you sure you want to update this product?')
    if(confirmation && this.product){
      this.jsonService.updateProduct(this.product).subscribe(res=>{
        this.router.navigate(['admin'])
      })
    }
  }
}
