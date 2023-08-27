import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/store';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  
  public prdID: number | null = null;
  public product: IProduct | null = null;
  public disablePrevBtn: boolean = false;
  public disableNextBtn: boolean = false;
  
  constructor(private activatedRoute: ActivatedRoute, private prdService: ProductsService, private route: Router) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.prdID = +params["id"];
      this.product = this.prdService.getProductDetailsByID(this.prdID);
      this.disablePrevBtn = this.prdService.productList[0].id === this.prdID
      this.disableNextBtn = this.prdService.productList[(this.prdService.productList.length - 1)].id === this.prdID
    })
  }

  public nextPRD() {
    const newID = this.prdService.getNextPrdID(this.prdID);
    if (newID) {
      this.navigateToProduct(newID)
    }
  }

  public prevPRD() {
    const newID = this.prdService.getPreviousPrdID(this.prdID);
    if (newID) {
      this.navigateToProduct(newID)
    }
  }

  public navigateToProduct(id: number): void {
    this.route.navigate(['product', id])
  }
}
