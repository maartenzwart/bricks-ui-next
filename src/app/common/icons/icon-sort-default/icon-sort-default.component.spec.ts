import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconSortDefaultComponent} from './icon-sort-default.component';

describe('IconSortDefaultComponent', () => {
  let component: IconSortDefaultComponent;
  let fixture: ComponentFixture<IconSortDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconSortDefaultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSortDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
