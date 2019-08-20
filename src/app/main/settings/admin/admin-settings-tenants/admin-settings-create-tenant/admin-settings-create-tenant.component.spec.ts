import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminSettingsCreateTenantComponent} from './admin-settings-create-tenant.component';

describe('AdminSettingsCreateTenantComponent', () => {
  let component: AdminSettingsCreateTenantComponent;
  let fixture: ComponentFixture<AdminSettingsCreateTenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSettingsCreateTenantComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingsCreateTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
