import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrganisationSettingsUserCreateComponent} from './organisation-settings-user-create.component';

describe('OrganisationSettingsUserCreateComponent', () => {
  let component: OrganisationSettingsUserCreateComponent;
  let fixture: ComponentFixture<OrganisationSettingsUserCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrganisationSettingsUserCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationSettingsUserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
