import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CourseItemComponent } from '../course-item/course-item.component';
import { SearchPipe } from '../../pipes/search.pipe';
import { CourseDurationPipe } from '../../pipes/course-date.pipe';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [CourseListComponent, CourseItemComponent, CourseDurationPipe],
      providers: [SearchPipe]
    }).createComponent(CourseListComponent);
  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create course list component', () => {
    expect(component).toBeTruthy();
  });

  describe('AddButton', () => {
    let addButton: HTMLButtonElement;

    beforeEach(() => {
      addButton = compiled.querySelector('.stud-courses__add-button');
    });

    it('should have + Add course text', () => {
      expect(addButton.textContent).toBe('+ Add course');
    });

  });

  describe('Load More', () => {
    let loadMoreLink: HTMLLinkElement;

    beforeEach(() => {
      loadMoreLink = compiled.querySelector('.stud-courses__more a');
    });

    it('should contain link with LOAD MORE text', () => {
      expect(loadMoreLink.textContent).toBe('LOAD MORE');
    });
  });

  describe('DeleteCourse', () => {
    it('should call onDelete clicking on delete button', () => {
      spyOn(component, 'onDelete');
      const courseItem: HTMLElement = compiled.querySelector('app-course-item');
      const deleteButton: HTMLButtonElement = courseItem.querySelector('.stud-course-delete');
      deleteButton.click();
      expect(component.onDelete).toHaveBeenCalled();
    });

    it('should call onDelete with course ID', () => {
      spyOn(console, 'log');
      const courseItem: HTMLElement = compiled.querySelector('app-course-item');
      const deleteButton: HTMLButtonElement = courseItem.querySelector('.stud-course-delete');
      deleteButton.click();
      expect(console.log).toHaveBeenCalledWith('Delete course id:', component.courses[0].id);
    });
  });
});
