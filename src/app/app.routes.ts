import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TrainingComponent } from './components/training/training.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio | IPDP' },
  { path: 'nosotros', component: AboutComponent, title: 'Nosotros | IPDP' },
  { path: 'formacion', component: TrainingComponent, title: 'Formación | IPDP' },
  { path: 'contacto', component: ContactComponent, title: 'Contacto | IPDP' },
  { path: '**', redirectTo: '' }
];
