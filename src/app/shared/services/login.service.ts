import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
 import 'rxjs/add/observable/of';
 import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie';
import { TenantUser } from '../models/tenant-user';

@Injectable()
export class LoginService { 
  loginUser:TenantUser;

  constructor(private http: Http,
              private cookieService: CookieService
              ){
      this.loginUser = new TenantUser();
   }

  private loginUrl = environment.API_ENDPOINT + "account/login";

  login(user: TenantUser) {
    //Authenticate website via api    
    this.loginUser.tenantName = user.tenantName;
    this.loginUser.username   = user.username;
    this.loginUser.password   =  user.password;
        
    var body =  this.loginUser;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(this.loginUser);
    return this.http
      .post(this.loginUrl, body, { headers: headers, withCredentials: true })
      .map(res => {
        console.log(res.status);
        if (res.status === 200) {
          this.cookieService.put("username",user.username);
        }
      });
  }
  logout() {
    this.cookieService.remove("username");
  }
}
