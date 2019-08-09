import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconProjectLightComponent} from './icon-project-light.component';

describe('IconProjectLightComponent', () => {
  let component: IconProjectLightComponent;
  let fixture: ComponentFixture<IconProjectLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconProjectLightComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconProjectLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
