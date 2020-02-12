import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseModule } from 'app/modules/courses/course.module';
import { SharedModule } from 'app/shared/shared.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        CourseModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create home component', () => {
    expect(component).toBeTruthy();
  });
});
