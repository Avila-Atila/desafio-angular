import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { VinsearchService } from '../../services/vinsearch.service';
import { CommonModule } from '@angular/common';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Subject,
  takeUntil,
} from 'rxjs';
import { Vindata } from '../../models/Vindata.Interface';

@Component({
  selector: 'app-vinsearch',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './vinsearch.component.html',
  styleUrl: './vinsearch.component.css',
})
export class VinsearchComponent implements OnInit, OnDestroy {
  ngOnInit() {
    this.vin.valueChanges
      .pipe(
        debounceTime(300),
        filter((v: string | null): v is string => !!v && v.length >= 19),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe((vin) => {
        this.vinServico.getVin(vin).subscribe({
          next: (resp) => {
            this.vinInfo.set(resp);
            this.vinSearchError.set(false);
          },
          error: (err) => {
            alert(err.error.message);
            this.vinSearchError.set(true);
          },
        });
      });
  }
  private destroy$ = new Subject<void>();
  protected vinServico = inject(VinsearchService);
  protected vinInfo = signal<Vindata | null>(null);
  protected vinSearchError = signal<boolean>(false);

  vin = new FormControl('');

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
