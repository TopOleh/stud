import { Component, DoCheck } from '@angular/core';
import { AuthentificationService } from 'app/shared/services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {
  isLoggedin: boolean;

  constructor(private auth: AuthentificationService) { }

  // TODO: not sure it is right
  ngDoCheck(): void {
    this.isLoggedin = this.auth.isLogedIn();
  }

  logOut(): void {
    this.auth.logOut();
  }
}
