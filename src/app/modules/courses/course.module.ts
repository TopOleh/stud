import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseListComponent, CourseItemComponent } from './components';
import { FreshCourseDirective } from './directives/fresh-course.directive';
import { CourseDurationPipe } from './pipes/course-date.pipe';
import { SharedModule } from 'app/shared/shared.module';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [CourseListComponent, CourseItemComponent, FreshCourseDirective, CourseDurationPipe],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CourseListComponent],
  providers: [SearchPipe]
})
export class CourseModule { }
