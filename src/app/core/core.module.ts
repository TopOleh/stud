import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthentificationModule } from 'app/modules/authentification/authentification.module';

import { FooterComponent, HeaderComponent, CORE_COMPONENTS } from '.';


@NgModule({
  declarations: [...CORE_COMPONENTS],
  imports: [
    SharedModule,
    AuthentificationModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
