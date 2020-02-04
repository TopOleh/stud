import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FakeLogoComponent, BreadcrumbComponent, SearchComponent } from './components';


@NgModule({
  declarations: [FakeLogoComponent, BreadcrumbComponent, SearchComponent],
  imports: [
    CommonModule
  ],
  exports: [FakeLogoComponent, BreadcrumbComponent, SearchComponent]
})
export class SharedModule { }
