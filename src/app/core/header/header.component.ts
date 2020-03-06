import { Component } from '@angular/core';
import { AuthentificationService } from 'app/shared/services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private auth: AuthentificationService) {}

  logOut(): void {
    this.auth.logOut();
  };
}
