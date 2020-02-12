import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let compiled: HTMLElement;
  let searchInput: HTMLInputElement;
  let searchButton: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    searchInput = compiled.querySelector('.stud-course-search__input');
    searchButton = compiled.querySelector('.stud-course-search__button');
    searchInput.value = 'Angular';
    fixture.detectChanges();
  });

  it('should create search component', () => {
    expect(component).toBeTruthy();
  });

  it('should call function findCourse on click', () => {
    spyOn(component, 'findCourse');
    searchButton.click();

    fixture.whenStable().then(() => {
      expect(component.findCourse).toHaveBeenCalled();
    });
  });

  it('should console log search input', async (() => {
    spyOn(console, 'log');

    searchButton.click();

    fixture.whenStable().then(() => {
      expect(console.log).toHaveBeenCalledWith('Search data: ', 'Angular');
    });
  }));

});
