import {Component, OnInit} from '@angular/core';
import {BrxTenants} from '../../../../../interfaces/brx-tenant';
import {AdminTenantService} from '../../../../../services/settings/admin/admin-tenant.service';
import {BrxListHeaders} from '../../../../../interfaces/brx-list-header';

@Component({
  selector: 'brx-admin-settings-tenant-list',
  templateUrl: './admin-settings-tenant-list.component.html',
  styleUrls: ['./admin-settings-tenant-list.component.scss']
})
export class AdminSettingsTenantListComponent implements OnInit {
  tenants: BrxTenants = [];
  listHeaders: BrxListHeaders = [{
    index: 0,
    key: 'name',
    title: 'Naam'
  }];

  constructor(private adminTenantService: AdminTenantService) {
  }

  ngOnInit() {
    this.adminTenantService.getTenants().subscribe(result => this.tenants = result);
  }
}
