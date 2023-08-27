import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/user/models/iuser';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public profile: IUser | null = null;
  constructor(private userService: UserService, private route: Router) {
  }
  ngOnInit(): void {
    console.log(this.userService.user ? true : false)
    if (this.userService.user) {
      this.userService.profile.next(JSON.parse(this.userService.user))
    }
    this.userService.profile.subscribe(profile => {
      this.profile = profile
    })
  }

  logout() {
    localStorage.removeItem('user')
    this.userService.profile.next(null);
    this.route.navigateByUrl('/products-by-json-server')
  }

}
