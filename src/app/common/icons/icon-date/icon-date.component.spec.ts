import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDateComponent } from './icon-date.component';

describe('IconDateComponent', () => {
  let component: IconDateComponent;
  let fixture: ComponentFixture<IconDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
