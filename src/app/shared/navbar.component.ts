import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
  <nav class="sticky">
    <div class="container" style="display:flex; align-items:center; justify-content:space-between; gap:1rem">
      <a routerLink="/" class="brand" style="display:flex; align-items:center; gap:.8rem; font-weight:900; letter-spacing:.02em; text-decoration:none">
        <img src="assets/ipdp-logo.png" alt="IPDP" width="36" height="36" style="border-radius:50%; border:1px solid var(--border)">
        <span>IPDP</span>
        <span class="badge" style="margin-left:.4rem">Instituto Peruano de Derecho y Política</span>
      </a>
      <div class="links" style="display:flex; gap:1rem; align-items:center; font-weight:700">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Inicio</a>
        <a routerLink="/nosotros" routerLinkActive="active">Nosotros</a>
        <a routerLink="/formacion" routerLinkActive="active">Formación</a>
        <a routerLink="/contacto" class="cta" routerLinkActive="active">Contacto</a>
      </div>
    </div>
  </nav>
  `,
  styles: [`a.active { text-decoration: underline; text-underline-offset: .35rem; }`]
})
export class NavbarComponent {}
