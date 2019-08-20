import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconPlusLightComponent} from './icon-plus-light.component';

describe('IconPlusLightComponent', () => {
  let component: IconPlusLightComponent;
  let fixture: ComponentFixture<IconPlusLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconPlusLightComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPlusLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
