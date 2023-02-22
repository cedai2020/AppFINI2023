import { TestBed } from '@angular/core/testing';

import { PaisInvitadoService } from './pais-invitado.service';

describe('PaisInvitadoService', () => {
  let service: PaisInvitadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisInvitadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
