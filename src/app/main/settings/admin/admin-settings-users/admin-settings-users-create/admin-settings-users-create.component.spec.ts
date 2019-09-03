import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminSettingsUsersCreateComponent} from './admin-settings-users-create.component';

describe('AdminSettingsUsersCreateComponent', () => {
  let component: AdminSettingsUsersCreateComponent;
  let fixture: ComponentFixture<AdminSettingsUsersCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSettingsUsersCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingsUsersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
