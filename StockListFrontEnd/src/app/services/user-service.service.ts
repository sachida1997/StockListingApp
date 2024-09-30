import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  _baseUrl="http://99.81.59.175:9096/api/v1.0";

  _baseUrlsignup = "http://99.81.59.175:9091/api/v1.0"

  requestHeader = new HttpHeaders({
    'NoAuth': "True"
  });

  constructor(private httpClient: HttpClient,private userAuthService: AuthServiceService) { }

  public login(loginData:any){
    return this.httpClient.post(this._baseUrl+"/authentication"+"/login",loginData,{headers : this.requestHeader});
  }

  public registerNewUser(user:User){
    return this.httpClient.post(this._baseUrlsignup+"/userProfile/register",user);

  }

  addUser(user:User):Observable<User>{
    return this.httpClient.post<User>(this._baseUrlsignup+'/userProfile/register',user);
  }


  public forUser() {
    return this.httpClient.get(this._baseUrl + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpClient.get(this._baseUrl + '/forAdmin', {
      responseType: 'text',
    });
  }

  // changePassword(loginId:string,forgotPassword:ForgotPassword){
  //   return this.httpClient.put(this._baseUrl+"/"+loginId+'/forgot',forgotPassword, { responseType: 'text' });
  // }

  public roleMatch(allowedRoles : any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }
}
