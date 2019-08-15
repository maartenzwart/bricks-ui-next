import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HrAgendaFooterComponent} from './hr-agenda-footer.component';

describe('FooterComponent', () => {
  let component: HrAgendaFooterComponent;
  let fixture: ComponentFixture<HrAgendaFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrAgendaFooterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrAgendaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
