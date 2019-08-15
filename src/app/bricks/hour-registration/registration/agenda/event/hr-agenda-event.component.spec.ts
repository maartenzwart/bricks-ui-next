import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HrAgendaEventComponent} from './hr-agenda-event.component';

describe('HrAgendaEventComponent', () => {
  let component: HrAgendaEventComponent;
  let fixture: ComponentFixture<HrAgendaEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrAgendaEventComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrAgendaEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
