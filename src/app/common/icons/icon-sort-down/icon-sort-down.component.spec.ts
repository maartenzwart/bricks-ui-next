import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconSortDownComponent} from './icon-sort-down.component';

describe('IconSortDownComponent', () => {
  let component: IconSortDownComponent;
  let fixture: ComponentFixture<IconSortDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconSortDownComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSortDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
