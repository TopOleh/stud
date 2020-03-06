import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  logIn(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logOut(): void {
    localStorage.removeItem('user');
  }

  isLogedIn(): boolean {
    return !!this.getUserInfo();
  }

  getUserInfo(): User {
    return JSON.parse(localStorage.getItem('user'));
  }
}
