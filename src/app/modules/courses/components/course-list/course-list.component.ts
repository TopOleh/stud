import { Component, OnInit, ViewChild } from '@angular/core';

import { Course } from 'app/modules/courses/interfaces/course';

import { SearchPipe } from '../../pipes/search.pipe';
import { CourseService } from '../../services/course.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  isAdding: boolean;
  courseForm = new FormGroup({
    title: new FormControl('', Validators.required),
    creationDate: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  @ViewChild('searchInput', { static: true }) searchInput: HTMLInputElement;

  constructor(private search: SearchPipe, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  onDelete(courseId: string): void {
    if (confirm('Are you sure, you want delete the course?')) {
      this.courses = this.courseService.removeCourse(courseId);
    }
  }

  onAddCourse(): void {
    this.isAdding = true;
    console.log('this.courseForm :', this.courseForm);
  }

  addCourse(): void {
    console.log('form :', this.courseForm.valid);
  }

  findCourses(name: string): void {
    const allCourses = this.courseService.getCourses();
    this.courses = this.search.transform(allCourses, name);
  }
}
