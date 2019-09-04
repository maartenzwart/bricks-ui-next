import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputSelectUserComponent} from './input-select-user.component';

describe('InputSelectUserComponent', () => {
  let component: InputSelectUserComponent;
  let fixture: ComponentFixture<InputSelectUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputSelectUserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
