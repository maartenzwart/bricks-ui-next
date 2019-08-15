import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HrRegistrationComponent} from './hr-registration.component';

describe('RegistrationComponent', () => {
  let component: HrRegistrationComponent;
  let fixture: ComponentFixture<HrRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrRegistrationComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
