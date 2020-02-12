import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeLogoComponent } from './fake-logo.component';

describe('FakeLogoComponent', () => {
  let component: FakeLogoComponent;
  let fixture: ComponentFixture<FakeLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create fake-logo Component', () => {
    expect(component).toBeTruthy();
  });

  it('should have img', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img')).toBeTruthy();
  });

  it('img should contain alt text', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').alt).not.toBe('');
  });

  it('src img should not be empty', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').src).not.toBe('');
  });
});
