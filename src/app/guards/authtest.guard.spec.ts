import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authtestGuard } from './authtest.guard';

describe('authtestGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authtestGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
