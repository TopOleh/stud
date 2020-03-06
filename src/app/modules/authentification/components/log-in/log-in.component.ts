import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthentificationService } from 'app/shared/services/authentification.service';
import { NewUser } from 'app/shared/interfaces/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  private isFilled: boolean

  @ViewChild('passwordInput', {static: true}) password: ElementRef;
  @ViewChild('emailInput', {static: true}) email: ElementRef;
  @ViewChild('loginButton', {static: true}) logInButton: MatButton;

  @HostListener('keyup', ['$event'])
  handleKeydown(): void {
    this.isFilled = !!this.password.nativeElement.value && !!this.email.nativeElement.value;
    this.logInButton.disabled = !this.isFilled;
  }

  constructor(private auth: AuthentificationService) { }

  ngOnInit(): void {
  }

  onLogIn(): void {
    if (this.isFilled) {
      const user = new NewUser(this.email.nativeElement.value, this.password.nativeElement.value);
      this.auth.logIn(user);
    }
  }

}
