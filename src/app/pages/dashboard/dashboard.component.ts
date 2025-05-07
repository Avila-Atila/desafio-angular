import { Component, inject, signal } from '@angular/core';
import { VehiclesService } from '../../services/vehicles.service';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { LoginService } from '../../services/login.service';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  of,
  pipe,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { Carros } from '../../models/Carros.interface';
import { VinsearchService } from '../../services/vinsearch.service';
import { Vindata } from '../../models/vindata.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    SideBarComponent,
    UserProfileComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  protected vehicles = inject(VehiclesService);
  protected servico = inject(LoginService);
  protected vinServico = inject(VinsearchService);
  protected carrosLista = signal<Carros[]>([]);
  protected carroAtual = signal<Carros | null>(null);
  protected vinInfo = signal<Vindata | null>(null);

  vin = new FormControl('');

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
  pesquisarVin(vin: string) {
    of(vin)
      .pipe(
        filter((v) => v.length > 19),
        switchMap((vinValido) => this.vinServico.getVin(vinValido))
      )
      .subscribe({
        next: (resp) => {
          console.log(resp);
        },
        error: (err) => console.error(err),
      });
  }
}
