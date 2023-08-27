import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable(
  {
    providedIn: 'root'
  }
)
export class TestApiService {

  constructor(private _HttpClient: HttpClient) { }

  getapi(): Observable<any> {
    return this._HttpClient.get("https://dummyjson.com/products")
  }
}
