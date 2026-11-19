import { TestBed } from '@angular/core/testing';

import { GrupoConvite } from './grupo-convite';

describe('GrupoConvite', () => {
  let service: GrupoConvite;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoConvite);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
