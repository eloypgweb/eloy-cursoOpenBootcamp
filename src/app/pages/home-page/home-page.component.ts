import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink } from '@angular/router';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('HomePageComponent initialized');
  }

  navegarParaContacts() {
    //this.router.navigate(['/contacts']);
  }

}
