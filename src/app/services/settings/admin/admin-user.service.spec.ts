import {TestBed} from '@angular/core/testing';

import {AdminUserService} from './admin-user.service';

describe('AdminUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminUserService = TestBed.get(AdminUserService);
    expect(service).toBeTruthy();
  });
});
