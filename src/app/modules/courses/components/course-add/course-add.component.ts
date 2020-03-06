import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

  courseForm: FormGroup;

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      title: new FormControl('', Validators.required),
      creationDate: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  addCourse(): void {
    console.log('Add');
  }
}
