import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HrAgendaComponent} from './hr-agenda.component';

describe('AgendaComponent', () => {
  let component: HrAgendaComponent;
  let fixture: ComponentFixture<HrAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrAgendaComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
