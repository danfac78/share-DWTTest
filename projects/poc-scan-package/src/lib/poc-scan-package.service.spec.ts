import { TestBed } from '@angular/core/testing';

import { PocScanPackageService } from './poc-scan-package.service';

describe('PocScanPackageService', () => {
  let service: PocScanPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PocScanPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
