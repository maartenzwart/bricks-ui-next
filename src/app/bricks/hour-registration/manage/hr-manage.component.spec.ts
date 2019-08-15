import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HrManageComponent} from './hr-manage.component';

describe('ManageComponent', () => {
  let component: HrManageComponent;
  let fixture: ComponentFixture<HrManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrManageComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
