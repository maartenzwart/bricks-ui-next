import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputSelectProjectComponent} from './input-select-project.component';

describe('InputSelectProjectComponent', () => {
  let component: InputSelectProjectComponent;
  let fixture: ComponentFixture<InputSelectProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputSelectProjectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
