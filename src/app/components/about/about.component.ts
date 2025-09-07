import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
  <section class="container" style="padding:1.2rem 0">
    <div class="card">
      <span class="kicker">Nosotros</span>
      <h1 class="section-title">Quiénes somos</h1>
      <p class="section-sub">
        El IPDP es una institución dedicada a la formación especializada en Derecho y Política,
        promoviendo la investigación y el debate académico con impacto social.
      </p>

      <div class="grid grid-3">
        <div>
          <h3>Misión</h3>
          <p style="color:var(--muted)">Formar profesionales con pensamiento crítico, ético y orientado a resultados.</p>
        </div>
        <div>
          <h3>Visión</h3>
          <p style="color:var(--muted)">Ser referente nacional en educación jurídica y de políticas públicas.</p>
        </div>
        <div>
          <h3>Valores</h3>
          <p style="color:var(--muted)">Excelencia, integridad, pluralidad, servicio y compromiso con el país.</p>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top:1rem">
      <h2 class="section-title">Hitos</h2>
      <ul style="list-style:none; padding:0; margin:0">
        <li style="display:grid; grid-template-columns: 120px 1fr; gap:1rem; padding:.6rem 0; border-bottom:1px dashed var(--border)">
          <span class="badge">2016</span>
          <div><strong>Fundación del IPDP</strong><br><small style="color:var(--muted)">Inicio de actividades académicas y primeras alianzas.</small></div>
        </li>
        <li style="display:grid; grid-template-columns: 120px 1fr; gap:1rem; padding:.6rem 0; border-bottom:1px dashed var(--border)">
          <span class="badge">2019</span>
          <div><strong>Expansión digital</strong><br><small style="color:var(--muted)">Programas virtuales y eventos masivos en línea.</small></div>
        </li>
        <li style="display:grid; grid-template-columns: 120px 1fr; gap:1rem; padding:.6rem 0;">
          <span class="badge">2024</span>
          <div><strong>Red académica</strong><br><small style="color:var(--muted)">Vinculación con organizaciones públicas y privadas.</small></div>
        </li>
      </ul>
    </div>
  </section>
  `,
  styles: []
})
export class AboutComponent {}
