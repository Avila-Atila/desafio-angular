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
    email: new FormControl('', [Validators.email, Validators.required]),
    senha: new FormControl('', [Validators.required]),
    permanecerLogado: new FormControl<boolean | null>(null),
  });

  submitUsuario() {}
}
