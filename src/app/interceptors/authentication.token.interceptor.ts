import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {

  constructor(private authSvc: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authSvc.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authSvc.getToken()}`,
        },
      });
    }

    return next.handle(request);
  }
}
