import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HrManageActivitiesComponent} from './hr-manage-activities.component';

describe('HrManageActivitiesComponent', () => {
  let component: HrManageActivitiesComponent;
  let fixture: ComponentFixture<HrManageActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrManageActivitiesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrManageActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
