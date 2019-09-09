import {TestBed} from '@angular/core/testing';

import {BrxModalService} from './brx-modal.service';

describe('BrxModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrxModalService = TestBed.get(BrxModalService);
    expect(service).toBeTruthy();
  });
});
