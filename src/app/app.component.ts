import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, RouterLink, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso-bootcamp';
}
