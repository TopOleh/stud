export * from './course-item/course-item.component';
export * from './course-list/course-list.component';
export * from './course-add/course-add.component';

import { CourseAddComponent } from './course-add/course-add.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseListComponent } from './course-list/course-list.component';

export const COURSE_COMPONENTS = [
  CourseAddComponent,
  CourseItemComponent,
  CourseListComponent
]
