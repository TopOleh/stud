import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListComponent, CourseItemComponent } from './components';


@NgModule({
  declarations: [CourseListComponent, CourseItemComponent],
  imports: [
    CommonModule
  ]
})
export class CourseModule { }
