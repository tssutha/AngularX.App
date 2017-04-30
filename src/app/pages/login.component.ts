import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import 'rxjs/Rx';
import { Subscriber } from "rxjs/Subscriber";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { TenantUser } from '../shared/models/tenant-user';
import { LoginService } from '../shared/services/login.service';
import { UserService } from '../shared/services/user.service';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  user:TenantUser;
  error = "";

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {
      this.user = new TenantUser();
  }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user)
      .mergeMap(p => this.route.queryParams)
      .map(qp => qp['redirectTo'])
      .subscribe(redirectTo => {
        if (this.userService.getLoginStatus("username")) {
          let url = redirectTo ? [redirectTo] : ['/home'];
          this.router.navigate(url);
          this.error = "";
        }
        else {
          this.error = "Invalid username or password !";
        }
      }, error => {
        this.error = "Invalid username or password !";
      });
  }

}
