import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InputSelectActivityComponent} from './input-select-activity.component';

describe('InputSelectActivityComponent', () => {
  let component: InputSelectActivityComponent;
  let fixture: ComponentFixture<InputSelectActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputSelectActivityComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
