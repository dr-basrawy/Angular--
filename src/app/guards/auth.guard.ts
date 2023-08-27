import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user/services/user.service';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService)
  const router = inject(Router)
  console.log(state.url)
  console.log(route);
  if(state.url === '/admin'){
    console.log(userService)
    if(userService.profile.value){
      return true
    }else{
      router.navigateByUrl('auth/login');
      return false
    }
  }
  return true;
};
