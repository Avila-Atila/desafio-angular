import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  http = inject(HttpClient);
  loginUsuario() {
    const linkApi = 'http://localhost:3001/login';
    return this.http.post(linkApi, JSON.stringify);
  }
}
