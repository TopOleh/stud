import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';

import { CourseListComponent, CourseItemComponent } from './components';

import { FreshCourseDirective } from './directives';
import { CourseDurationPipe, SearchPipe } from './pipes';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    FreshCourseDirective,
    CourseDurationPipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [CourseListComponent],
  providers: [SearchPipe]
})
export class CourseModule { }
