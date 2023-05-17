import {Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';

export const routes: Routes = [
  {path: 'home', component: HomePageComponent, title: 'Home'},
  {
    path: 'contacts',
    title: 'Contacts',
    loadComponent: () => import('./pages/contacts-page/contacts-page.component').then(mod => mod.ContactsPageComponent)
  },
  {
    path: 'about',
    title: 'About',
    loadComponent: () => import('./pages/about-page/about-page.component').then(mod => mod.AboutPageComponent)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
