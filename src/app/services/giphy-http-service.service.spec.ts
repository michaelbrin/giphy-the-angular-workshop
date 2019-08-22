import { TestBed } from '@angular/core/testing';

import { GiphyHttpServiceService } from './giphy-http-service.service';

describe('GiphyHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiphyHttpServiceService = TestBed.get(GiphyHttpServiceService);
    expect(service).toBeTruthy();
  });
});
