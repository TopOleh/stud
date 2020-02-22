import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { CourseDurationPipe } from '../../pipes/course-date.pipe';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let de: DebugElement;
  let durationPipe: CourseDurationPipe;
  let datePipe: DatePipe;

  beforeEach(async(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [CourseItemComponent, CourseDurationPipe]
    }).createComponent(CourseItemComponent);
  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    de = fixture.debugElement;
    durationPipe = new CourseDurationPipe();
    datePipe = new DatePipe('en');
    component.course = {
      id: '5db5ab963c703ee7ec7fb12b',
      title: 'JavaScript Advanced',
      topRated: false,
      duration: 656,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aspernatur voluptas voluptatem.',
      creationDate: '2019-11-15T10:37:49.771Z'
    },
      fixture.detectChanges();
  });

  it('should create couse item component', () => {
    expect(component).toBeTruthy();
  });

  describe('CourseActions', () => {
    let deleteButton: DebugElement;
    let editButton: DebugElement;

    beforeEach(() => {
      editButton = de.query(By.css('.stud-course-edit'));
      deleteButton = de.query(By.css('.stud-course-delete'));
    });

    it('should contain edit text for edit button', () => {
      expect(editButton.nativeElement.textContent).toBe('Edit');
    });

    it('should contain delete text for delete button', () => {
      expect(deleteButton.nativeElement.textContent).toBe('Delete');
    });

    it('should trigger delete method on click delete button', () => {
      spyOn(component, 'delete');
      deleteButton.nativeElement.click();
      expect(component.delete).toHaveBeenCalled();
    });

    it('should emit which item to delete by id by clicking delete button', () => {
      spyOn(component.deleteCourse, 'emit');
      deleteButton.nativeElement.click();
      expect(component.deleteCourse.emit).toHaveBeenCalledWith(component.course.id);
    });
  });

  describe('CourseInfo', () => {
    let courseTitle: DebugElement;
    let courseDuration: DebugElement;
    let courseDate: DebugElement;
    let courseDescription: DebugElement;
    beforeEach(() => {
      courseTitle = de.query(By.css('.stud-course__title'));
      courseDuration = de.query(By.css('.stud-course__duration'));
      courseDate = de.query(By.css('.stud-course__date'));
      courseDescription = de.query(By.css('.stud-course__description'));
    });

    it('should contain course title in uppercase', () => {
      const title = component.course.title.toUpperCase();
      expect(courseTitle.nativeElement.textContent.trim()).toBe(title);
    });

    it('should contain course duration in format Duration: 10h 56min', () => {
      const formatedDuration = durationPipe.transform(component.course.duration);
      expect(courseDuration.nativeElement.textContent).toBe(`Duration: ${formatedDuration}`);
    });

    it('should contain course date in format Date: 15 Nov, 2019', () => {
      const formatedDate = datePipe.transform(component.course.creationDate, 'd MMM, y');
      expect(courseDate.nativeElement.textContent).toBe(`Date: ${formatedDate}`);
    });

    it('should contain course description', () => {
      expect(courseDescription.nativeElement.textContent).toBe(component.course.description);
    });
  });
});
