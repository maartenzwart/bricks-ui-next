import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputPhoneNumberCountryCodeComponent} from './input-phone-number-country-code.component';

describe('InputPhoneNumberCountryCodeComponent', () => {
  let component: InputPhoneNumberCountryCodeComponent;
  let fixture: ComponentFixture<InputPhoneNumberCountryCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputPhoneNumberCountryCodeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPhoneNumberCountryCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
