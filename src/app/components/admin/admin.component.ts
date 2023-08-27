import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/store';
import { NewProductService } from 'src/app/Services/new-product-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public allProducts: IProduct[] = [];

  constructor(private prdService: NewProductService, private route:Router) { }
  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(): void {
    this.prdService.getAllProducts().subscribe(res => {
      this.allProducts = res
    })
  }

  deleteProduct(id: number): void {
    const result = confirm("Are you sure you want to delete?");
    if (result) {
      this.prdService.deleteProduct(id).subscribe(res => {
        this.getAllProducts()
      })
    }

  }

  editProduct(id:number): void {
    this.route.navigate(['admin','edit-product', id])
  }
}
