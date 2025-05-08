import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { LoginService } from '../../services/login.service';
import { filter, of, switchMap } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { VinsearchService } from '../../services/vinsearch.service';
import { Vindata } from '../../models/vindata.interface';
import { FormControl } from '@angular/forms';
import { CardsComponent } from '../../components/cards/cards.component';
import { VinsearchComponent } from '../../components/vinsearch/vinsearch.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    SideBarComponent,
    UserProfileComponent,
    ReactiveFormsModule,
    CardsComponent,
    VinsearchComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  protected servico = inject(LoginService);

  imagemCarroAtual: string | null = null;

  mudarImagemCarro(info: string) {
    this.imagemCarroAtual = info;
  }
}
