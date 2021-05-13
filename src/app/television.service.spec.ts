import { TestBed } from '@angular/core/testing';

import { TelevisionService } from './television.service';

describe('TelevisionService', () => {
  let service: TelevisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelevisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
