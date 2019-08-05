import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourRegistrationComponent } from './hour-registration.component';

describe('HourRegistrationComponent', () => {
  let component: HourRegistrationComponent;
  let fixture: ComponentFixture<HourRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
