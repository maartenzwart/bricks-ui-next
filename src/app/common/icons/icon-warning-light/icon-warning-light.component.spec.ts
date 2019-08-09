import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconWarningLightComponent} from './icon-warning-light.component';

describe('IconWarningLightComponent', () => {
  let component: IconWarningLightComponent;
  let fixture: ComponentFixture<IconWarningLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconWarningLightComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconWarningLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
