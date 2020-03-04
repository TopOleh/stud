import { Component, OnInit, ViewChild } from '@angular/core';

// Material
import { MatDialog } from '@angular/material/dialog';

import { DialogAddCourseComponent } from '../dialog-add-course/dialog-add-course.component';

import { CourseService } from '../../services/course.service';

import { SearchPipe } from '../../pipes';

import { Course } from 'app/modules/courses/interfaces/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  isAdding: boolean;

  @ViewChild('searchInput', { static: true }) searchInput: HTMLInputElement;

  constructor(
    private search: SearchPipe,
    private courseService: CourseService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  onDelete(courseId: string): void {
    if (confirm('Are you sure, you want delete the course?')) {
      this.courses = this.courseService.removeCourse(courseId);
    }
  }

  onAddCourse(): void {
    this.dialog.open(DialogAddCourseComponent);
  }

  findCourses(name: string): void {
    const allCourses = this.courseService.getCourses();
    this.courses = this.search.transform(allCourses, name);
  }
}
