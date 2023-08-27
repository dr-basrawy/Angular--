import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/store';
import { NewProductService } from 'src/app/Services/new-product-service';

@Component({
  selector: 'app-json-server-product-details',
  templateUrl: './json-server-product-details.component.html',
  styleUrls: ['./json-server-product-details.component.scss']
})
export class JsonServerProductDetailsComponent implements OnInit {
  public prdID: number | null = null;
  public product: IProduct | null = null;

  constructor(private activatedRoute: ActivatedRoute, private prdService: NewProductService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.prdID = parseInt(params['id']);
      this.prdService.getProductByID(this.prdID).subscribe(res=>{
        this.product = res
      })
    })
  }
}
