import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css',
})
export class FormLoginComponent implements OnInit {
  ngOnInit() {
    this.servico.autologin();
  }

  public erroLogin: string | null = null;
  public senhaVisivel: boolean = false;

  constructor(private router: Router, private servico: LoginService) {}

  login = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    loginAutomatico: new FormControl(false),
  });

  mostrarSenha(): void {
    this.senhaVisivel = !this.senhaVisivel;
  }

  submitUsuario(): void {
    const autoLoginCheck = this.login.get('loginAutomatico')!.value;
    this.servico.novoLogin(this.login).subscribe({
      next: (resp) => {
        this.erroLogin = null;
        this.servico.loginCorreto(resp, autoLoginCheck!);
        this.router.navigate(['/home']);
      },
      error: (err) => (this.erroLogin = err.error.message),
    });
  }
}
