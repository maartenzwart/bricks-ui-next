import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminSettingsTenantsComponent} from './admin-settings-tenants.component';

describe('AdminSettingsTenantsComponent', () => {
  let component: AdminSettingsTenantsComponent;
  let fixture: ComponentFixture<AdminSettingsTenantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSettingsTenantsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingsTenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
