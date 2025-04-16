import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  http = inject(HttpClient);
  async loginUsuario(info: any) {
    const linkApiLogin = 'http://localhost:3001/login';
    await fetch(linkApiLogin, {
      method: 'POST',
      headers: {
        'Tipo-Request': 'application/json',
      },
      body: JSON.stringify(info),
    });
  }
  async teste(info: any) {
    const novoTeste = JSON.stringify(info.value);
    await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Tipo-Request': 'application/json',
      },
      body: novoTeste,
    });
  }
}
