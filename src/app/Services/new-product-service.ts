import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/store';

@Injectable({
  providedIn: 'root'
})
export class NewProductService {
  public apiURL = environment.jsonServerAPIURL;
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.apiURL}/products`);
  }

  getProductsByCatID(catID: number): Observable<any> {
    return this.http.get(`${this.apiURL}/products?categoryID=${catID}`)
  }
  getProductByID(ID: number): Observable<any> {
    return this.http.get(`${this.apiURL}/products/${ID}`)
  }
  createNewProduct(product: IProduct): Observable<any> {
    return this.http.post(`${this.apiURL}/products`, product)
  }
  updateProduct(product: IProduct): Observable<any> {
    return this.http.patch(`${this.apiURL}/products/${product.id}`, product)
  }
  deleteProduct(prdID: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/products/${prdID}`)
  }
}
