import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
