import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Router } from '@angular/router';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
        // handle in success case
    },
    (err: any) => {
        if(err instanceof HttpErrorResponse) {
            if(err.status === 401) {
                this.router.navigate(['login']);
            }
        }
    }));
    return null;
  }
}
