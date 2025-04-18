import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RequestService } from '../services/request.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css',
})
export class FormLoginComponent {
  login = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
  });
  teste = inject(RequestService);
  async submitUsuario() {
    await this.teste.loginUsuario(this.login);
  }
}
