import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';

import { FreshCourseDirective } from './directives';
import { CourseDurationPipe, SearchPipe } from './pipes';

import { COURSE_COMPONENTS } from './components';

@NgModule({
  declarations: [
    ...COURSE_COMPONENTS,
    FreshCourseDirective,
    CourseDurationPipe,
    SearchPipe
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  providers: [SearchPipe]
})
export class CourseModule { }
