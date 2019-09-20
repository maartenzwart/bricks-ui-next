import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutCommonHeaderComponent} from './layout-common-header.component';

describe('LayoutCommonHeaderComponent', () => {
  let component: LayoutCommonHeaderComponent;
  let fixture: ComponentFixture<LayoutCommonHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutCommonHeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCommonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
