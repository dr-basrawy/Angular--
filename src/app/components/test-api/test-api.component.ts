import { Component, OnInit } from '@angular/core';
import { IApiResponse } from 'src/app/Models/api-products';
import { TestApiService } from 'src/app/Services/test-api.service';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.scss']
})
export class TestAPIComponent implements OnInit {
  public products: any;
  public beResponse: any;
  constructor(private api: TestApiService) { }

  ngOnInit(): void {
    this.api.getapi().subscribe((response: IApiResponse) => {
      console.log(response)
      this.beResponse = response;
      
      const bool = this.checkProducts();
      console.log(bool);


      if(bool) {
        this.mergeResult(response);
      }else{
        console.log('products are more than 100 product')
      }


    }, (e) => { console.log(e) })
  }

  mergeResult(x: IApiResponse): void {
    this.products = x.products;
  }

  checkProducts(): boolean {
    if (this.beResponse.total > 100) {
      return true;
    } else {
      return false
    }
  }

}
