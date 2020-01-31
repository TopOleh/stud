import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent, HeaderComponent } from '.';


@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
