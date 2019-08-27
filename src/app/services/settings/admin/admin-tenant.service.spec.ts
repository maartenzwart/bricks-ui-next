import {TestBed} from '@angular/core/testing';

import {AdminTenantService} from './admin-tenant.service';

describe('AdminTenantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminTenantService = TestBed.get(AdminTenantService);
    expect(service).toBeTruthy();
  });
});
