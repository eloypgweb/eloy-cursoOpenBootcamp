import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatBadgeModule,
    RouterLink,
    NgIf,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  token: string | null = null;

  constructor(private router: Router) {}

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

  navegarParaForm(): void {
    this.router.navigate(['formulario']);
  }

  login(): void {
    this.router.navigate(['login']);
  }

  logout(): void {
    sessionStorage.removeItem('token');
    this.router.navigate(['home']);
  }
}
