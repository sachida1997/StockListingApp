import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
constructor(private userAuthService: AuthServiceService,
  private router:Router) {}

intercept(
  req: HttpRequest<any>,
  next: HttpHandler
): Observable<HttpEvent<any>> {
  if (req.headers.get('noAuth') === 'True') {
    return next.handle(req.clone());
  }

  const token = this.userAuthService.getToken();
 // console.log(token);

  if(token){
    req = this.addToken(req, token);
    console.log(req);
  }
 

  return next.handle(req).pipe(
      catchError(
          (err:HttpErrorResponse) => {
              console.log(err.status);
              if(err.status === 401) {
                  this.router.navigate(['/login']);
              } else if(err.status === 403) {
                  this.router.navigate(['/forbidden']);
              }
              return throwError("Some thing is wrong");
          }
      )
  );
}


private addToken(request:HttpRequest<any>, token:string) {
    return request.clone(
        {
            setHeaders: {
                Authorization : `Bearer ${token}`
            }
        }
    );
}
}
