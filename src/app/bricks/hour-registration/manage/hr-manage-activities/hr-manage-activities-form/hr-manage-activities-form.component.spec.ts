import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HrManageActivitiesFormComponent} from './hr-manage-activities-form.component';

describe('HrManageActivitiesFormComponent', () => {
  let component: HrManageActivitiesFormComponent;
  let fixture: ComponentFixture<HrManageActivitiesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrManageActivitiesFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrManageActivitiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
