import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HrAssessComponent} from './hr-assess.component';

describe('AssessComponent', () => {
  let component: HrAssessComponent;
  let fixture: ComponentFixture<HrAssessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrAssessComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrAssessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
