import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    component.course = {
      id: '5db5ab963c703ee7ec7fb12b',
      title: 'JavaScript Advanced',
      topRated: true,
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
    let deleteButton: HTMLButtonElement;
    let editButton: HTMLButtonElement;

    beforeEach(() => {
      editButton = compiled.querySelector('.stud-course-edit');
      deleteButton = compiled.querySelector('.stud-course-delete');
    });

    it('should contain edit text for edit button', () => {
      expect(editButton.textContent).toBe('Edit');
    });

    it('should contain delete text for delete button', () => {
      expect(deleteButton.textContent).toBe('Delete');
    });

    it('should trigger delete method on click delete button', () => {
      spyOn(component, 'delete');
      deleteButton.click();
      expect(component.delete).toHaveBeenCalled();
    });

    it('should emit which item to delete by id by clicking delete button', () => {
      spyOn(component.deleteCourse, 'emit');
      deleteButton.click();
      expect(component.deleteCourse.emit).toHaveBeenCalledWith(component.course.id);
    });
  });

  describe('CourseInfo', () => {
    let courseTitle: HTMLHeadingElement;
    let courseDuration: HTMLTimeElement;
    let courseDate: HTMLTimeElement;
    let courseDescription: HTMLParagraphElement;
    beforeEach(() => {
      courseTitle = compiled.querySelector('.stud-course__title');
      courseDuration = compiled.querySelector('.stud-course__duration');
      courseDate = compiled.querySelector('.stud-course__date');
      courseDescription = compiled.querySelector('.stud-course__description');
    });

    it('should contain course title', () => {
      expect(courseTitle.textContent).toBe(component.course.title);
    });

    it('should contain course duration', () => {
      expect(courseDuration.textContent).toBe('Duration: ' + component.course.duration);
    });

    it('should contain course date', () => {
      expect(courseDate.textContent).toBe('Date: ' + component.course.creationDate);
    });

    it('should contain course description', () => {
      expect(courseDescription.textContent).toBe(component.course.description);
    });
  });
});
