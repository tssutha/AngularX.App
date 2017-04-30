import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class UserService {

  constructor(private cookieService: CookieService) {
  }

  getLoginStatus(key: string) {
    return this.cookieService.get(key);
  }

  getCurrentUsername(key:string):string{
    return this.cookieService.get(key);
  }

  logout() {
    this.cookieService.remove("username");
    console.log(this.cookieService.get('username'));
  }
}
