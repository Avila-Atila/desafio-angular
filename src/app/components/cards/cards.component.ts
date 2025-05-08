import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { Carros } from '../../models/Carros.interface';
import { tap } from 'rxjs';
import { VehiclesService } from '../../services/vehicles.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  protected carrosLista = signal<Carros[]>([]);
  protected carroAtual = signal<Carros | null>(null);
  protected vehicles = inject(VehiclesService);
  @Output() imagemCarroAtual = new EventEmitter<string>();

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
    this.imagemCarroAtual.emit(this.carroAtual()!.img);
  }
}
