import { TestBed, inject } from '@angular/core/testing';

import { LaunchService } from './launch.service';

describe('LaunchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaunchService]
    });
  });

  it('should ...', inject([LaunchService], (service: LaunchService) => {
    expect(service).toBeTruthy();
  }));
});
