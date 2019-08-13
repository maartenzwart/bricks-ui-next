import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrganisationSettingsUsersComponent} from './organisation-settings-users.component';

describe('OrganisationSettingsUsersComponent', () => {
  let component: OrganisationSettingsUsersComponent;
  let fixture: ComponentFixture<OrganisationSettingsUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrganisationSettingsUsersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationSettingsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
