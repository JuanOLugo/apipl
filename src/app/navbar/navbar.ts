import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Auth } from '../services/auth';
import { APP_NAME } from '../config/app-config';
import { Toast } from '../services/toast';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {
  constructor(private authService: Auth, private toast: Toast) {}
  APP_NAME = APP_NAME;
  showItems = false;
  ngOnInit(): void {
    this.showItems = this.authService.isAuthenticated();
  }

}
