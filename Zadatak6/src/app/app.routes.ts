import { Routes } from '@angular/router';
import { SidebaarComponent } from './sidebaar/sidebaar.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SidebaarComponent },
  { path: 'search', component: SidebaarComponent },
  { path: 'calendar', component: SidebaarComponent },
  { path: 'messages', component: SidebaarComponent },
  { path: 'projects', component: SidebaarComponent },
  { path: 'progress', component: SidebaarComponent },
  { path: 'goals', component: SidebaarComponent },
  { path: 'notifications', component: SidebaarComponent },
  { path: 'settings', component: SidebaarComponent },
  { path: 'profile', component: SidebaarComponent }
];
