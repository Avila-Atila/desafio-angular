import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, pipe, tap } from 'rxjs';
import { usuarioLogin } from './models/usuarioLogin.model';
import { Usuario } from './models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  private apiLogin = 'http://localhost:3001/login';
  private apiCarros = 'http://localhost:3001/vehicles';

  novoLogin(info: FormGroup): Observable<usuarioLogin> {
    return this.http.post<usuarioLogin>(this.apiLogin, info.value);
  }
}
