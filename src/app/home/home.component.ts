import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../services/request.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  dataDeAceso: string | null = null;

  servico = inject(RequestService);
  constructor(private router: Router) {
    this.dataDeAceso = new Date().toLocaleDateString('pt-br', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }
}
