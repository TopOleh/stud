import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from 'app/shared/shared.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create Header Component', () => {
    expect(component).toBeTruthy();
  });

  describe('HeaderAuthorization', () => {
    let loginButton: HTMLButtonElement;
    let logoutButton: HTMLButtonElement;

    beforeEach(() => {
      loginButton = compiled.querySelector('.stud-header__authorization-login');
      logoutButton = compiled.querySelector('.stud-header__authorization-logout');
    });

    it('should have login button with User login text', () => {
      expect(loginButton.textContent).toBe('User login');
    });

    it('should have logout button with Log off text', () => {
      expect(logoutButton.textContent).toBe('Log off');
    });
  });
});
