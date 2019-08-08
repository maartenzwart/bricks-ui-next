import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconJobComponent} from './icon-job.component';

describe('IconJobComponent', () => {
  let component: IconJobComponent;
  let fixture: ComponentFixture<IconJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconJobComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
