import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocScanPackageComponent } from './poc-scan-package.component';

describe('PocScanPackageComponent', () => {
  let component: PocScanPackageComponent;
  let fixture: ComponentFixture<PocScanPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocScanPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocScanPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
