import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HrManageJobsComponent} from './hr-manage-jobs.component';

describe('HrManageJobsComponent', () => {
  let component: HrManageJobsComponent;
  let fixture: ComponentFixture<HrManageJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrManageJobsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrManageJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
