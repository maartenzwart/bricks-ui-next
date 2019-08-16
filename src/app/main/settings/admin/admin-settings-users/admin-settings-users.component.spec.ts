import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminSettingsUsersComponent} from './admin-settings-users.component';

describe('AdminSettingsUsersComponent', () => {
  let component: AdminSettingsUsersComponent;
  let fixture: ComponentFixture<AdminSettingsUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSettingsUsersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
