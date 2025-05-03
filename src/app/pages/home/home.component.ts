import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SideBarComponent, UserProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  dataDeAceso: string | null = null;

  servico = inject(LoginService);
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
