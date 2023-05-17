import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

export const routes: Routes = [
  {path: 'home', component: HomePageComponent, title: 'Home'},
  {
    path: 'about',
    title: 'About',
    loadComponent: () => import('./about-page/about-page.component').then(mod => mod.AboutPageComponent)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
