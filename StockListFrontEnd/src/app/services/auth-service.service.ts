import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  constructor() { }

  public setRoles(roles: []) {
    sessionStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(sessionStorage.getItem('roles') as string);
  }

  public setToken(jwtToken: string) {
    sessionStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    return sessionStorage.getItem('jwtToken') as string;
  }

  public clear() {
    sessionStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

  public isAdmin(){
    const roles:any[]=this.getRoles();
    return roles[0].roleName === 'Admin';
  }
  public isUser(){
    const roles:any[]=this.getRoles();
    return roles[0].roleName === 'User';
  }
}
