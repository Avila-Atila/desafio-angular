import { inject } from '@angular/core';
import { RequestService } from './request.service';
import { Router } from '@angular/router';

export const autenticarGuard = () => {
  const verificar = inject(RequestService);
  const router = inject(Router);
  if (!verificar.UsuarioLogado()) {
    router.navigate(['login']);
    return false;
  } else {
    return true;
  }
};
