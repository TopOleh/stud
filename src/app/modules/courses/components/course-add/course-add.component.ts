import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CourseService } from '../../services/course.service';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

  courseForm: FormGroup;

  constructor(
    private courseService: CourseService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      title: new FormControl('', Validators.required),
      creationDate: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      authors: new FormControl('', Validators.required)
    });
  }

  addCourse(course: Course): void {
    this.courseService.createCourse(course);
    this.router.navigate(['home', 'courses']);
  }
}
