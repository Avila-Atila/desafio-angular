import { Component, inject, signal } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { LoginService } from '../../services/login.service';
import { tap } from 'rxjs';
import { Carros } from '../../models/carros.interface';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SideBarComponent, UserProfileComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  vehicles = inject(VehiclesService);
  servico = inject(LoginService);
  cars$ = this.vehicles
    .getVehicles()
    .pipe(tap((resp) => this.carrosLista.set(resp)));

  carrosLista = signal<Carros[]>([]);
  carroAtual = signal<Carros | null>(null);
  mudarCarro(id: string) {
    const target = this.carrosLista().find((carro) => carro.id === Number(id))!;
    this.carroAtual.set(target);
  }
}
