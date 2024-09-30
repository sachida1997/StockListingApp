import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public userservice:UserServiceService, private userAuthService: AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  loginData = {
    username: '',
    password: '',
  };

  login() {
    console.log(this.loginData);
    this.userservice.login(this.loginData).subscribe(
      (response: any) => {
        console.log(response);
        if (Array.isArray(response.roles) && response.roles.length > 0) {
        this.userAuthService.setRoles(response.roles[0].name);
        this.userAuthService.setToken(response.accessToken);

        const role = response.roles[0].name;
        console.log(role);
        if (role === 'ROLE_CUSTOMER') {
          this.router.navigate(['/stocklist']);
        } else {
          this.router.navigate(['/']);
        }
      }},
      (error) => {
        console.log(error);
      }
    );

  
  }

}
