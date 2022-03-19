import { TestBed } from '@angular/core/testing';

import { AuthentifiationGuard } from './authentifiation.guard';

describe('AuthentifiationGuard', () => {
  let guard: AuthentifiationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthentifiationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
