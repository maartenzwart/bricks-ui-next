import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputSelectCustomerComponent} from './input-select-customer.component';

describe('InputSelectCustomerComponent', () => {
  let component: InputSelectCustomerComponent;
  let fixture: ComponentFixture<InputSelectCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputSelectCustomerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
