import { Injectable } from '@angular/core';
import { CookieManage } from './cookie-manage';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(
    private http: HttpClient,
    private cookieService: CookieManage,
    private router: Router
  ) {}

  verifyToken() {
    return this.http.get('/auth/verify-token', {
      headers: {
        Authorization: this.cookieService.getCookie('auth-token') || '',
      },
    });
  }

  isAuthenticated(): boolean {
    return this.cookieService.getCookie('auth-token') !== undefined;
  }

  logOut() {
    this.router.navigate(['/auth']);
    return false
  }
}
