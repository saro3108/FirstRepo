import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpErrorResponse,HttpResponse } from '@angular/common/http';
import { AuthService } from '../AuthService/auth.service'
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor(
        public auth: AuthService,
        public route: Router
    ) {}

 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        const authReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${this.auth.getToken()}`
            }
          });
        return next.handle(authReq).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              // do stuff with response if you want
            }
          }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                // redirect to the login route
                this.route.navigateByUrl('/login');
                // or show a modal
              }
            }
          });
        }
}