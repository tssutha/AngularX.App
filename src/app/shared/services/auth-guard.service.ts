import { Injectable } from '@angular/core';
import { Route, Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie';

import { UserService } from './user.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private userService: UserService,
    private router: Router,
    private cookieService: CookieService
    ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.getLoginStatus("username")) {
      console.log('quard service passsed"');
      return true;
    }
    this.router.navigate(['/pages/login'], { queryParams: { redirectTo: state.url } });
    return false;  
  }
}
