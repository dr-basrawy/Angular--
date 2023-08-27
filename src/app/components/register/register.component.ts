import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public registerationForm: FormGroup;
  public errMessage: string = ''
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerationForm = this.fb.group({
      fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/gm)])
    });
  }

  get controls(){
    return this.registerationForm.controls
  }

  register(){
    this.userService.registerNewProfile(this.registerationForm.value).subscribe(res=>{
      confirm('Registeration completed successfully')
    },err=>{
      console.log('err',err)
    })
  }

}
