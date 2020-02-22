import { FreshCourseDirective } from './fresh-course.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div appFreshCourse creationDate="{{creationDate}}">
      <div class="test-border-color">Test</div>
    </div>
  `
})
class TestFreshCourseDirectiveComponent {
  creationDate: string;
}

describe('FreshCourseDirective', () => {

  let fixture: ComponentFixture<TestFreshCourseDirectiveComponent>;
  let component: TestFreshCourseDirectiveComponent;
  let de: DebugElement;
  let currentDate: number;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestFreshCourseDirectiveComponent, FreshCourseDirective]
    }).createComponent(TestFreshCourseDirectiveComponent);

    fixture.detectChanges();
  });

  beforeEach(() => {
    component = fixture.debugElement.componentInstance;
    currentDate = new Date('2020-02-01T10:37:49.771Z').getTime();

    de = fixture.debugElement.query(By.css('.test-border-color'));
  });

  it('should create component', () => {
    component.creationDate = '2020-02-15T10:37:49.771Z';
    expect(component).toBeDefined();
  });

  it('should set green border for done courses', () => {
    component.creationDate = '2020-02-15T10:37:49.771Z';
    fixture.detectChanges();

    expect(de.nativeElement.style.borderColor).toBe('green');
  });

  it('should set blue border for future course', () => {
    component.creationDate = '2021-02-15T10:37:49.771Z';
    fixture.detectChanges();

    expect(de.nativeElement.style.borderColor).toBe('blue');
  });

  it('should set none border for very old courses', () => {
    component.creationDate = '2019-02-15T10:37:49.771Z';
    fixture.detectChanges();

    expect(de.nativeElement.style.borderColor).toBe('');
  });
});
