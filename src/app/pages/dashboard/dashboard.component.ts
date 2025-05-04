import { Component, inject, signal } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { LoginService } from '../../services/login.service';
import { tap } from 'rxjs';
import { Carros } from '../../models/Carros.interface';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SideBarComponent, UserProfileComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  protected vehicles = inject(VehiclesService);
  protected servico = inject(LoginService);
  protected carrosLista = signal<Carros[]>([]);
  protected carroAtual = signal<Carros | null>(null);

  cars$ = this.vehicles.getVehicles().pipe(
    tap((resp) => {
      this.carrosLista.set(resp);
      this.mudarCarro(this.carrosLista()[0].id);
    })
  );

  mudarCarro(id: number | string) {
    const carroSelecionado = this.carrosLista().find(
      (carro) => carro.id === Number(id)
    )!;
    this.carroAtual.set(carroSelecionado);
  }
}
