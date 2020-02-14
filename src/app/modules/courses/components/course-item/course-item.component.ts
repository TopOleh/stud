import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
  @Input() course: Course;
  @Output() deleteCourse = new EventEmitter<string>();

  delete(): void {
    console.log();
    const id = this.course.id;
    this.deleteCourse.emit(id);
  }
}
