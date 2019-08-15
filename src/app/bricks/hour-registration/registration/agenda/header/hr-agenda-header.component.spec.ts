import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HrAgendaHeaderComponent} from './hr-agenda-header.component';

describe('HeaderComponent', () => {
  let component: HrAgendaHeaderComponent;
  let fixture: ComponentFixture<HrAgendaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrAgendaHeaderComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrAgendaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
