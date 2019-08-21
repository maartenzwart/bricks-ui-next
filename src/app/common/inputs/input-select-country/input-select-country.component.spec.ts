import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputSelectCountryComponent} from './input-select-country.component';

describe('InputSelectCountryComponent', () => {
  let component: InputSelectCountryComponent;
  let fixture: ComponentFixture<InputSelectCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputSelectCountryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
