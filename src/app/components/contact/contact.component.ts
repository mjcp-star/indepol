import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
  <section class="container" style="padding:1.2rem 0">
    <div class="card" style="max-width:780px; margin: 0 auto">
      <span class="kicker">Contacto</span>
      <h1 class="section-title">Hablemos</h1>
      <p class="section-sub">Envíanos tu consulta. Este sitio no usa backend: al enviar se abre tu cliente de correo o Gmail con el mensaje prellenado.</p>

      <form [formGroup]="form" (ngSubmit)="enviar()" style="display:grid; gap:.9rem">
        <div class="grid" style="grid-template-columns:1fr 1fr">
          <label>Nombre
            <input class="input" formControlName="nombre" placeholder="Tu nombre" />
          </label>
          <label>Correo
            <input class="input" formControlName="correo" placeholder="tucorreo@ejemplo.com" type="email" />
          </label>
        </div>
        <label>Asunto
          <input class="input" formControlName="asunto" placeholder="Tema del mensaje" />
        </label>
        <label>Mensaje
          <textarea class="textarea" formControlName="mensaje" rows="6" placeholder="Cuéntanos en qué podemos ayudarte"></textarea>
        </label>
        <div style="display:flex; gap:.7rem; align-items:center; flex-wrap:wrap">
          <button class="btn" type="submit" [disabled]="form.invalid">Enviar por tu correo</button>
          <a class="btn ghost" [href]="gmailComposeUrl" target="_blank" rel="noopener">Abrir en Gmail</a>
          <button type="button" class="btn ghost" (click)="copiar()">Copiar contenido</button>
          <span *ngIf="ok" class="notice">Listo: abre tu correo y envía.</span>
          <span *ngIf="copiado" class="notice">Copiado al portapapeles.</span>
        </div>
      </form>

      <div class="card" style="margin-top:1rem">
        <strong>Datos de referencia</strong>
        <ul>
          <li><strong>Correo de contacto:</strong> wmc.peru.2025@gmail.com</li>
          <li><strong>Horario:</strong> Lun–Sáb 9:00–20:00</li>
        </ul>
      </div>
    </div>
  </section>
  `,
  styles: []
})
export class ContactComponent {
  private fb = new FormBuilder();
  ok = false; copiado = false; readonly destinatario = 'wmc.peru.2025@gmail.com';
  form = this.fb.group({ nombre:['',[Validators.required,Validators.minLength(2)]], correo:['',[Validators.required,Validators.email]], asunto:['',[Validators.required,Validators.minLength(3)]], mensaje:['',[Validators.required,Validators.minLength(10)]] });
  get gmailComposeUrl(){ const {asunto,mensaje,nombre,correo}=this.form.value; const subject=`[IPDP] ${asunto||''} — ${nombre||''}`.trim(); const body=`Nombre: ${nombre||''}\nCorreo: ${correo||''}\n\n${mensaje||''}`; const params=new URLSearchParams({view:'cm',to:this.destinatario,su:subject,body}); return 'https://mail.google.com/mail/?'+params.toString(); }
  enviar(){ if(this.form.invalid) return; const {asunto,mensaje,nombre,correo}=this.form.value; const subject=`[IPDP] ${asunto} — ${nombre}`; const body=`Nombre: ${nombre}\nCorreo: ${correo}\n\n${mensaje}`; const link=`mailto:${this.destinatario}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; window.location.href=link; this.ok=true; setTimeout(()=>this.ok=false,4000); }
  async copiar(){ const {asunto,mensaje,nombre,correo}=this.form.value; const text=`[${asunto}] ${nombre} <${correo}>\n\n${mensaje}`; try{ await navigator.clipboard.writeText(text); this.copiado=true; setTimeout(()=>this.copiado=false,2500);}catch{}
}
}
