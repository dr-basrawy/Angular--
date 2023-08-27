import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Models/store';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public apiURL = environment.jsonServerAPIURL
  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any>{
    return this.http.get(`${this.apiURL}/categories`)
  }
}
