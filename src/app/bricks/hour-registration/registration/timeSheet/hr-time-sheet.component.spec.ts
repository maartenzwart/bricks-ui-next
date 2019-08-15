import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HrTimeSheetComponent} from './hr-time-sheet.component';

describe('TableComponent', () => {
  let component: HrTimeSheetComponent;
  let fixture: ComponentFixture<HrTimeSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrTimeSheetComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrTimeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
