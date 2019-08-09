import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconClientLightComponent} from './icon-client-light.component';

describe('IconClientLightComponent', () => {
  let component: IconClientLightComponent;
  let fixture: ComponentFixture<IconClientLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconClientLightComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconClientLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
