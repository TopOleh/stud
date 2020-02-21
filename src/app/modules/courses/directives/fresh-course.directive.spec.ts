import { FreshCourseDirective } from './fresh-course.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItemComponent } from '../components';
import { DebugElement, Renderer2 } from '@angular/core';

describe('FreshCourseDirective', () => {
  let directive: FreshCourseDirective;
  let fixture: ComponentFixture<CourseItemComponent>;
  let fixture1: ComponentFixture<FreshCourseDirective>;
  let compiled: DebugElement;
  let renderer: Renderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    compiled = fixture.debugElement;
    renderer = fixture1.componentRef.injector.type(Renderer2);
    directive = new FreshCourseDirective(compiled, renderer);
  });

  // it('should create an instance', () => {
  //   const directive = new FreshCourseDirective(elRef, renderer);
  //   expect(directive).toBeTruthy();
  // });
});
