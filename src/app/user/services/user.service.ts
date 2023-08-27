import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = environment.jsonServerAPIURL;
  public profile: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private http: HttpClient) {
    if(this.user){
      this.profile.next(JSON.parse(this.user))
    }
  }

  registerNewProfile(profile: IUser): Observable<any> {
    return this.http.post(`${this.apiURL}/users`, profile)
  }

  login(email: string): Observable<any> {
    return this.http.get(`${this.apiURL}/users?email=${email}&_limit=1`)
  }
  get user(){
    return localStorage.getItem('user') ? localStorage.getItem('user') : ''
  }
}
