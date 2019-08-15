import { TestBed } from '@angular/core/testing';

import {HrEventService} from './hr-event.service';

describe('EventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HrEventService = TestBed.get(HrEventService);
    expect(service).toBeTruthy();
  });
});
