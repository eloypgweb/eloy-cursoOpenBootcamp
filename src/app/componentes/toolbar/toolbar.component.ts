import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatDividerModule, MatBadgeModule, RouterLink, NgIf],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  token: string | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('ToolbarComponent initialized');
    this.token = sessionStorage.getItem('token');
  }

  navegarParaContacts(): void {
    this.router.navigate(['contacts']);
  }
  
  navegarParaHome(): void {
    this.router.navigate(['/']);
  }

  login(): void {
    this.router.navigate(['login']);
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.router.navigate(['home']);
  }
}