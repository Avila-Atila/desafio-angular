import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RequestService } from '../services/request.service';
import { CommonModule } from '@angular/common';
import { Usuario } from '../services/models/usuario.model';

@Component({
  selector: 'app-form-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css',
})
export class FormLoginComponent {
  validarLogin: string | null = null;
  usuarioAtual: Usuario | null = null;
  login = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
  });
  requestService = inject(RequestService);
  submitUsuario() {
    this.requestService.novoLogin(this.login).subscribe({
      next: (response) => {
        this.validarLogin = null;
        this.usuarioAtual = response;
        console.log(this.usuarioAtual);
      },
      error: (err) => (this.validarLogin = err.error.message),
    });
  }
}
