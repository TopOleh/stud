import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatDialogModule } from '@angular/material/dialog';

import { SharedModule } from 'app/shared/shared.module';

import { FreshCourseDirective } from './directives';
import { CourseDurationPipe, SearchPipe } from './pipes';
import { CourseItemComponent, CourseListComponent } from './components';
import { DialogAddCourseComponent } from './components/dialog-add-course/dialog-add-course.component';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    DialogAddCourseComponent,
    FreshCourseDirective,
    CourseDurationPipe,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule
  ],
  exports: [CourseListComponent],
  providers: [SearchPipe]
})
export class CourseModule { }
