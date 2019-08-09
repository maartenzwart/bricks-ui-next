import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconHoursComponent} from './icon-hours.component';

describe('IconHoursComponent', () => {
  let component: IconHoursComponent;
  let fixture: ComponentFixture<IconHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconHoursComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
