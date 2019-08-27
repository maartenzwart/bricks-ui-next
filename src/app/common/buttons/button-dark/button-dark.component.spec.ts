import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonDarkComponent} from './button-dark.component';

describe('ButtonDarkComponent', () => {
  let component: ButtonDarkComponent;
  let fixture: ComponentFixture<ButtonDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDarkComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
