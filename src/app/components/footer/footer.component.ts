import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
constructor(){
  console.log('hi')
}
}



// import { Component } from '@angular/core';
// import { TestApiService } from 'src/app/Services/test-api.service';




// @Component({
//   selector: 'app-api-test',
//   templateUrl: './api-test.component.html',
//   styleUrls: ['./api-test.component.scss']
//   // providers:[TestApiService]
// })
// export class ApiTestComponent {
//   apidata: any[] = [];
//   constructor(_TestApiService: TestApiService) {
//     _TestApiService.getapi().subscribe((data) => {
//       this.apidata = data.product;
//       console.log(this.apidata);
//     });
//   }
// }

// <div class="row">
//     <div *ngFor="let it of apidata " class="col-md-2">
//   <div>

//     <h5>{{it.Material}}</h5>
//     <h5>{{it.categoryID}}</h5>
//     <h5>{{it.price}}</h5>
//     <h5>{{it.quantity}}</h5>
//     <h5>{{it.PrdimgURL}}</h5>
//      <h5>{{it.products.PrdimgURL}}</h5> 
//   </div>
//     </div>
// </div>
// <h1>tyfyugiugiguyf</h1>
