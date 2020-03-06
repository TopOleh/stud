import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private router: Router) {}

  logIn(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['home', 'courses']);
  }

  logOut(): void {
    localStorage.removeItem('user');
    this.router.navigate(['log-in']);
  }

  isLogedIn(): boolean {
    return !!this.getUserInfo();
  }

  getUserInfo(): User {
    return JSON.parse(localStorage.getItem('user'));
  }
}
