import { Component, ElementRef, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule, RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  sideBarFechada = signal<boolean>(true);

  constructor(public router: Router, private host: ElementRef<HTMLElement>) {}

  controleSideBar() {
    this.sideBarFechada.set(!this.sideBarFechada());
  }

  @HostListener('document:click', ['$event.target'])
  onclick(target: HTMLElement) {
    if (!this.host.nativeElement.contains(target)) {
      this.sideBarFechada.set(true);
    }
  }
}
