import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared/shared.module';
import { CourseModule } from 'app/modules/courses/course.module';

import { HomeComponent } from './components';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    CourseModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
