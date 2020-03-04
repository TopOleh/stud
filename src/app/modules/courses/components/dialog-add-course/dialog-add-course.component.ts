import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-course',
  templateUrl: './dialog-add-course.component.html',
  styleUrls: ['./dialog-add-course.component.scss']
})
export class DialogAddCourseComponent implements OnInit {

  courseForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<DialogAddCourseComponent>) { }

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      title: new FormControl('', Validators.required),
      creationDate: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  addCourse(): void {
    console.log('Add');
  }
}
