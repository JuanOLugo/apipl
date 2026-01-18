import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieManage } from '../services/cookie-manage';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Auth } from '../services/auth';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieManageService = inject(CookieManage);
  const authService = inject(Auth);
  const token = cookieManageService.getCookie('auth-token');
  const router = inject(Router);

  // Add token to request if it exists
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return next(req).pipe(
    // Handle errors
    catchError((err) => {
      if (err.status === 401) {
        authService.logOut();
      }
      return throwError(() => err);
    }),
  );
};
