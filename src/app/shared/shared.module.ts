import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import { FakeLogoComponent, BreadcrumbComponent } from './components';


@NgModule({
  declarations: [FakeLogoComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FakeLogoComponent,
    BreadcrumbComponent,
    MaterialModule,
    CommonModule
  ]
})
export class SharedModule { }
