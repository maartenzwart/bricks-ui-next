import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconSortUpComponent} from './icon-sort-up.component';

describe('IconSortUpComponent', () => {
  let component: IconSortUpComponent;
  let fixture: ComponentFixture<IconSortUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconSortUpComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSortUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
