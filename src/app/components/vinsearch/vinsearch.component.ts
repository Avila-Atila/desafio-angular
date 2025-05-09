import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { VinsearchService } from '../../services/vinsearch.service';
import { Vindata } from '../../models/vindata.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vinsearch',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './vinsearch.component.html',
  styleUrl: './vinsearch.component.css',
})
export class VinsearchComponent {
  protected vinServico = inject(VinsearchService);
  vin = new FormControl('');
  protected vinInfo = signal<Vindata | null>(null);
  protected vinError = signal<string | null>(null);
  protected vinSearchError = signal<boolean>(false);
  pesquisarVin() {
    if (this.vin.value!.length > 19) {
      this.vinServico.getVin(this.vin.value!).subscribe({
        next: (resp) => {
          this.vinInfo.set(resp);
          this.vinSearchError.set(false);
        },
        error: (err) => {
          this.vinError.set(err);
          this.vinSearchError.set(true);
        },
      });
    }
  }
}
