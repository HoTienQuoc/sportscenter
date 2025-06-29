import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      if (error.status === 404) {
        console.log("404 error happened");
        const router = inject(Router);
        router.navigate(["/not-found"]);
      }
      else if (error.status === 500) {
        const router = inject(Router);
        router.navigate(['/server-error']);
      }
      //Passing the error along to the next error handling middleware
      throw error;
    })
  );
};
