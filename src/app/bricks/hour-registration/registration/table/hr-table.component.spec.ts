import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HrTableComponent} from './hr-table.component';

describe('TableComponent', () => {
  let component: HrTableComponent;
  let fixture: ComponentFixture<HrTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrTableComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
