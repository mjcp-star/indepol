import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
  <section class="hero">
    <div class="container" style="display:grid; gap:1.2rem; align-items:center; grid-template-columns:1.2fr 1fr">
      <div>
        <span class="kicker">Formación • Investigación • Extensión</span>
        <h1>Instituto Peruano</h1>
        <h1>de Derecho y Política</h1>
        <p>Programas diseñados por especialistas, con enfoque práctico y rigor académico para impulsar tu carrera en el ámbito jurídico y de políticas públicas.</p>
        <div style="display:flex; gap:.7rem; flex-wrap:wrap; margin-top:.6rem">
          <a class="btn" routerLink="/formacion">Ver programas</a>
          <a class="btn ghost" routerLink="/nosotros">Conocer el IPDP</a>
        </div>
        <div class="chips" style="margin-top:1rem">
          <span class="chip">Diplomados</span>
          <span class="chip">Cursos</span>
          <span class="chip">Seminarios</span>
          <span class="chip">Conferencias</span>
        </div>
      </div>
      <div class="glass-panel">
        <img src="assets/ipdp-logo.png" alt="IPDP Logo" width="340" height="340"/>
      </div>
    </div>
  </section>

  <section class="container" style="padding: 1.5rem 0 0">
    <h2 class="section-title">Pilares académicos</h2>
    <p class="section-sub">Combinamos experiencia práctica, docencia moderna y producción académica relevante para el país.</p>
    <div class="grid grid-3">
      <article class="card feature-card">
        <header style="display:flex; align-items:center">
          <span class="icon-circle" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 7v10M15 7v10M5 11h14M5 15h14M3 21h18" />
            </svg>
          </span>
          <div>
            <span class="badge">Docencia</span>
            <strong style="display:block;margin-top:.25rem">Metodología aplicada</strong>
          </div>
        </header>
        <p style="color:var(--muted); margin-top:.6rem">Clases asincrónicas y en vivo, resolución de casos y simulaciones.</p>
      </article>
      <article class="card feature-card">
        <header style="display:flex; align-items:center">
          <span class="icon-circle" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
          <div>
            <span class="badge">Investigación</span>
            <strong style="display:block;margin-top:.25rem">Producción y debate</strong>
          </div>
        </header>
        <p style="color:var(--muted); margin-top:.6rem">Grupos de estudio, artículos y foros de discusión permanente.</p>
      </article>
      <article class="card feature-card">
        <header style="display:flex; align-items:center">
          <span class="icon-circle" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 21h18M5 21v-8h14v8M7 13V9h10v4M9 9V7h6v2" />
            </svg>
          </span>
          <div>
            <span class="badge">Extensión</span>
            <strong style="display:block;margin-top:.25rem">Vinculación con la sociedad</strong>
          </div>
        </header>
        <p style="color:var(--muted); margin-top:.6rem">Eventos abiertos, clínicas jurídicas y alianzas institucionales.</p>
      </article>
    </div>
  </section>

  <section class="container" style="padding: 1.5rem 0 0">
    <h2 class="section-title">Eventos próximos</h2>
    <p class="section-sub">Ejemplos de agenda (demo sin backend).</p>
    <div class="grid grid-3">
      <article class="card">
        <strong>Seminario: Reforma del Proceso Penal</strong>
        <p style="color:var(--muted)">Sábado 14:00 - 17:00</p>
        <a class="btn" routerLink="/contacto">Inscribirme</a>
      </article>
      <article class="card">
        <strong>Curso corto: Derecho Administrativo Sancionador</strong>
        <p style="color:var(--muted)">Miércoles 19:00 - 21:00</p>
        <a class="btn" routerLink="/contacto">Inscribirme</a>
      </article>
      <article class="card">
        <strong>Conversatorio: Políticas públicas y descentralización</strong>
        <p style="color:var(--muted)">Jueves 18:00 - 20:00</p>
        <a class="btn" routerLink="/contacto">Inscribirme</a>
      </article>
    </div>
  </section>
  `,
  styles: []
})
export class HomeComponent {}
