import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CourseItemComponent } from '../course-item/course-item.component';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent, CourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
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
});
