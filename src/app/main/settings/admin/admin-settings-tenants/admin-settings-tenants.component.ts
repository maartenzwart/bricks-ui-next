import {Component, OnInit} from '@angular/core';
import {BrxTenants} from '../../../../interfaces/brx-tenant';
import {TenantService} from '../../../../services/tenant.service';

@Component({
  selector: 'brx-admin-settings-tenants',
  templateUrl: './admin-settings-tenants.component.html',
  styleUrls: ['./admin-settings-tenants.component.scss']
})
export class AdminSettingsTenantsComponent implements OnInit {
  tenants: BrxTenants = [];

  constructor(private tenantService: TenantService) {
  }

  ngOnInit() {
    this.tenantService.getTenants().subscribe(result => {
      console.log('getTenants', result);
      this.tenants = result;
    });
  }

}
