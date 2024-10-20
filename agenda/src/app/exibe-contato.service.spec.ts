import { TestBed } from '@angular/core/testing';

import { ExibeContatoService } from './exibe-contato.service';

describe('ExibeContatoService', () => {
  let service: ExibeContatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExibeContatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
