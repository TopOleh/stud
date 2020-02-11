import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent, HeaderComponent, PageNotFoundComponent } from '.';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
