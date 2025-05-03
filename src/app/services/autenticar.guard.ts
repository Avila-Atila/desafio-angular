import { inject } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

export const autenticarGuard = () => {
  const verificar = inject(LoginService);
  const router = inject(Router);
  if (!verificar.UsuarioLogado()) {
    router.navigate(['login']);
    return false;
  } else {
    return true;
  }
};
