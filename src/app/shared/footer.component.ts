import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
  <footer>
    <div class="container" style="display:grid; gap:1rem">
      <div style="display:flex; align-items:center; gap:.6rem">
        <img src="assets/ipdp-logo.png" alt="IPDP" width="26" height="26" style="border-radius:50%; border:1px solid var(--border)">
        <strong>Instituto Peruano de Derecho y Política</strong>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:1rem; justify-content:space-between; align-items:center">
        <small>© {{year}} IPDP. Todos los derechos reservados.</small>
        <small><a routerLink="/nosotros">Nosotros</a> · <a routerLink="/formacion">Formación</a> · <a routerLink="/contacto">Contacto</a></small>
      </div>
    </div>
  </footer>
  `,
  styles: [],
})
export class FooterComponent { year = new Date().getFullYear(); }
