import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminSettingsTenantListComponent} from './admin-settings-tenant-list.component';

describe('AdminSettingsTenantListComponent', () => {
  let component: AdminSettingsTenantListComponent;
  let fixture: ComponentFixture<AdminSettingsTenantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSettingsTenantListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingsTenantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
