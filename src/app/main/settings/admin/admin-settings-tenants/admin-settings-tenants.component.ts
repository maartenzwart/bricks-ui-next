import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdminTenantService} from '../../../../services/settings/admin/admin-tenant.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'brx-admin-settings-tenants',
  templateUrl: './admin-settings-tenants.component.html',
  styleUrls: ['./admin-settings-tenants.component.scss']
})
export class AdminSettingsTenantsComponent implements OnInit, OnDestroy {
  createTenant = false;
  createTenantCancelled: Subscription;

  constructor(private adminTenantService: AdminTenantService) {
    this.createTenantCancelled = adminTenantService.creatingNewTenantSource$.subscribe(result => {
      this.createTenant = result;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.createTenantCancelled.unsubscribe();
  }
}
