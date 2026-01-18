import { CanActivateFn, Router } from '@angular/router';
import { CookieManage } from '../services/cookie-manage';
import { isPublicRoute } from '../config/routes';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const cookiemanage = inject(CookieManage);
  const router = inject(Router);
  const token = cookiemanage.getCookie('auth-token');
  console.log(token);

  if (isPublicRoute(state.url)) {
    if (token) {
      router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }

  if (!token) {
    router.navigate(['/auth']);
    return false;
  }

  return true;
};
