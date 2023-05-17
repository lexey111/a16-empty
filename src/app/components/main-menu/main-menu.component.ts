import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterLinkActive, Routes} from '@angular/router';
import {routes} from '../../app.routes';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  public routes: Routes = routes;
}
