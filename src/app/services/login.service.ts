import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario.Interface';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {
    const infoLocal = localStorage.getItem(this.chaveUsuario);
    const infoSession = sessionStorage.getItem(this.chaveUsuario);
    if (infoLocal) {
      const usuario: Usuario = JSON.parse(infoLocal);
      this.UsuarioLogado.set(usuario);
      this.loginAutomatico.set(true);
    } else if (infoSession) {
      const usuario: Usuario = JSON.parse(infoSession);
      this.UsuarioLogado.set(usuario);
    }
  }

  UsuarioLogado = signal<Usuario | null>(null);
  loginAutomatico = signal<boolean>(false);
  private chaveUsuario: string = 'usuario';
  private apiLogin = 'http://localhost:3001/login';

  novoLogin(info: FormGroup): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiLogin, info.value);
  }

  loginCorreto(info: Usuario, loginAutomaticoCheckbox: boolean) {
    if (loginAutomaticoCheckbox) {
      localStorage.setItem(this.chaveUsuario, JSON.stringify(info));
      this.UsuarioLogado.set(info);
      this.loginAutomatico.set(true);
    } else {
      sessionStorage.setItem(this.chaveUsuario, JSON.stringify(info));
      this.UsuarioLogado.set(info);
    }
  }

  logout() {
    localStorage.removeItem(this.chaveUsuario);
    sessionStorage.removeItem(this.chaveUsuario);
    this.router.navigate(['login']);
    this.UsuarioLogado.set(null);
  }

  autologin() {
    if (this.loginAutomatico()) {
      this.router.navigate(['/home']);
    } else {
      this.logout();
    }
  }
}
