import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { AuthentificationRoutingModule } from './authentification-routing.module';

import { LogInComponent } from './components';


@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    SharedModule,
    AuthentificationRoutingModule
  ],
  exports: [
    AuthentificationRoutingModule
  ]
})
export class AuthentificationModule { }
