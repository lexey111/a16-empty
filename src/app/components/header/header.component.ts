import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainMenuComponent} from "../main-menu/main-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MainMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
