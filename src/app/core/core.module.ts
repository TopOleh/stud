import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent, HeaderComponent, CORE_COMPONENTS } from '.';


@NgModule({
  declarations: [...CORE_COMPONENTS],
  imports: [
    SharedModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
