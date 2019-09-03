import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonPlainComponent} from './button-plain.component';

describe('ButtonPlainComponent', () => {
  let component: ButtonPlainComponent;
  let fixture: ComponentFixture<ButtonPlainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonPlainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
