import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HrManageJobsFormComponent} from './hr-manage-jobs-form.component';

describe('HrManageFormComponent', () => {
  let component: HrManageJobsFormComponent;
  let fixture: ComponentFixture<HrManageJobsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrManageJobsFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrManageJobsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
