import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FakeLogoComponent, BreadcrumbComponent } from './components';

@NgModule({
  declarations: [FakeLogoComponent, BreadcrumbComponent],
  imports: [
    CommonModule
  ],
  exports: [FakeLogoComponent, BreadcrumbComponent]
})
export class SharedModule { }
