import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../models/iuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public errMessage: string = ''
  public loginForm: FormGroup
  constructor(private router: Router,private usrService: UserService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: new FormControl('',[Validators.required, Validators.email])
    })
  }

  login(){
    this.usrService.login(this.loginForm.value.email).subscribe((res: IUser[])=>{
      if(res.length){
        confirm('Welcome Mr '+ res[0]?.fullName)
        this.usrService.profile?.next(res[0]);
        localStorage.setItem('user', JSON.stringify(res[0]))
        this.router.navigateByUrl('/products-by-json-server')
      }else{
        this.errMessage = 'No Email found is saved in out DB'
      }
    })
  }
}
