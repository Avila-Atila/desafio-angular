import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-form-login',
  imports: [ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css',
})
export class FormLoginComponent {
  login = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    // permanecerLogado: new FormControl<boolean | null>(false),
  });

  // async submitUsuario() {
  //   console.log(this.login.value);
  //   await fetch('http://localhost:3001/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(this.login.value),
  //   });
  // }
  async submitUsuario() {
    await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Automatically converted to "username=example&password=password"
      body: JSON.stringify(this.login.value),
      // ...
    });
  }
}
