import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Categoria = 'Diplomados' | 'Cursos' | 'Seminarios';
interface Programa { titulo:string; descripcion:string; categoria:Categoria; horas:number; modalidad:'Virtual'|'Presencial'|'Híbrida'; }

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="container" style="padding:1.2rem 0">
    <div class="card">
      <span class="kicker">Oferta académica</span>
      <h1 class="section-title">Formación</h1>
      <p class="section-sub">Explora nuestra oferta. Esta es una lista de ejemplo sin conexión a base de datos.</p>
      <div style="display:flex; flex-wrap:wrap; gap:.5rem; margin-bottom:1rem">
        <button class="btn ghost" [class.active]="filtro==='Todos'" (click)="filtro='Todos'">Todos</button>
        <button class="btn ghost" [class.active]="filtro==='Diplomados'" (click)="filtro='Diplomados'">Diplomados</button>
        <button class="btn ghost" [class.active]="filtro==='Cursos'" (click)="filtro='Cursos'">Cursos</button>
        <button class="btn ghost" [class.active]="filtro==='Seminarios'" (click)="filtro='Seminarios'">Seminarios</button>
      </div>

      <div class="grid grid-3">
        <article class="card" *ngFor="let p of filtrados">
          <header style="display:flex; justify-content:space-between; align-items:center">
            <strong>{{p.titulo}}</strong>
            <span class="badge">{{p.categoria}}</span>
          </header>
          <p style="color:var(--muted)">{{p.descripcion}}</p>
          <div class="chips">
            <span class="chip">{{p.modalidad}}</span>
            <span class="chip">{{p.horas}} h</span>
          </div>
          <div style="margin-top:.8rem; display:flex; gap:.6rem">
            <a class="btn" routerLink="/contacto">Inscribirme</a>
            <a class="btn ghost" href="#" (click)="$event.preventDefault()">Descargar malla</a>
          </div>
        </article>
      </div>
    </div>
  </section>
  `,
  styles: [`.btn.ghost.active { border-color: var(--secondary); color: var(--secondary); }`]
})
export class TrainingComponent {
  filtro: 'Todos' | 'Diplomados' | 'Cursos' | 'Seminarios' = 'Todos';
  programas: Programa[] = [
    { titulo: 'Diplomado en Derecho Penal y Procesal Penal', descripcion: 'Enfoque práctico en litigación y estrategia procesal.', categoria: 'Diplomados', horas: 180, modalidad: 'Virtual' },
    { titulo: 'Curso de Derecho Administrativo Sancionador', descripcion: 'Marco normativo, jurisprudencia y casos.', categoria: 'Cursos', horas: 24, modalidad: 'Virtual' },
    { titulo: 'Seminario en Políticas Públicas y Gobernanza', descripcion: 'Diseño, evaluación y gestión de políticas.', categoria: 'Seminarios', horas: 8, modalidad: 'Presencial' },
    { titulo: 'Diplomado en Compliance y Ética Corporativa', descripcion: 'Prevención de riesgos y cultura ética.', categoria: 'Diplomados', horas: 160, modalidad: 'Híbrida' },
    { titulo: 'Curso de Derecho Constitucional Procesal', descripcion: 'Acciones de garantía y control constitucional.', categoria: 'Cursos', horas: 20, modalidad: 'Virtual' },
    { titulo: 'Seminario de Derecho Laboral Actual', descripcion: 'Tendencias y jurisprudencia reciente.', categoria: 'Seminarios', horas: 6, modalidad: 'Virtual' },
  ];
  get filtrados() { return this.filtro === 'Todos' ? this.programas : this.programas.filter(p => p.categoria === this.filtro); }
}
