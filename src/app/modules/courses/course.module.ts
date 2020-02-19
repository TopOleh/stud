import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListComponent, CourseItemComponent } from './components';
import { FreshCourseDirective } from './directives/fresh-course.directive';


@NgModule({
  declarations: [CourseListComponent, CourseItemComponent, FreshCourseDirective],
  imports: [
    CommonModule
  ],
  exports: [CourseListComponent]
})
export class CourseModule { }
