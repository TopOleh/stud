import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseListComponent, CourseItemComponent } from '../';
import { SearchPipe, CourseDurationPipe } from '../../pipes';
import { FreshCourseDirective } from '../../directives';
import { MOCK_DATA } from 'assets/mock/db';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [CourseListComponent, CourseItemComponent, CourseDurationPipe, FreshCourseDirective, SearchPipe],
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

  it('should load MOCK_DATA', () => {
    expect(MOCK_DATA).toBeTruthy();
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

  describe('Search', () => {
    let searchButton: HTMLButtonElement;
    let searchInput: HTMLInputElement;

    beforeEach(() => {
      searchButton = fixture.debugElement.query(By.css('.stud-course-search__button')).nativeElement;
      searchInput = fixture.debugElement.query(By.css('.stud-course-search__input')).nativeElement;
    });

    it('should call findCourses on search', () => {
      spyOn(component, 'findCourses');
      searchButton.click();

      expect(component.findCourses).toHaveBeenCalled();
    });

    it('should call findCourses with course name "java" ', () => {
      spyOn(component, 'findCourses');
      searchInput.value = 'java';

      searchButton.click();

      expect(component.findCourses).toHaveBeenCalledWith('java');
    });

    it('should left courses only with "java" name ', () => {
      spyOn(component, 'findCourses').and.callThrough();
      component.findCourses('java');
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.courses.length).toEqual(3);
      });
    });
  });
});
