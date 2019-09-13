import {Component, OnDestroy, OnInit} from '@angular/core';
import {BrxTenants} from '../../../../../interfaces/brx-tenant';
import {AdminTenantService} from '../../../../../services/settings/admin/admin-tenant.service';
import {BrxListHeaders} from '../../../../../interfaces/brx-list-header';
import {Subscription} from 'rxjs';

@Component({
  selector: 'brx-admin-settings-tenant-list',
  templateUrl: './admin-settings-tenant-list.component.html',
  styleUrls: ['./admin-settings-tenant-list.component.scss']
})
export class AdminSettingsTenantListComponent implements OnInit, OnDestroy {
  tenants: BrxTenants = [];
  listHeaders: BrxListHeaders = [{
    index: 0,
    key: 'name',
    title: 'Naam'
  }];
  subscription: Subscription;

  constructor(private adminTenantService: AdminTenantService) {
  }

  ngOnInit() {
    this.subscription = this.adminTenantService.getTenants().subscribe(result => this.tenants = result);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
