import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Router, RouteConfigLoadStart, RouteConfigLoadEnd} from '@angular/router';
import {MainMenuComponent} from "./components/main-menu/main-menu.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainMenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a16-standalone';
  isLoading: boolean = false;

  constructor(public router: Router) {
    this.router.events.subscribe(
      (event: any): void => {
        if (event instanceof RouteConfigLoadStart) {
          this.isLoading = true;
        } else if (event instanceof RouteConfigLoadEnd) {
          this.isLoading = false;
        }
      }
    );
  }
}
