import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from '../services/request.service';
import { Router } from '@angular/router';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SideBarComponent, UserProfileComponent],
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
