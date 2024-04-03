import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink } from '@angular/router';

import { Router } from '@angular/router';
import { IContacto } from '../../models/contact.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterLink, NgIf],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent implements OnInit {

  contactoSeleccionado: IContacto | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('HomePageComponent initialized');

    // Leemos el historial de navegación
    if(history.state.data) {
      console.log(history.state.data);
      this.contactoSeleccionado = history.state.data;
    }
  }

  navegarParaContacts(): void {
    
    let navigationExtras = {
      queryParams: {
        sexo: 'mujer'
      }
    };

    this.router.navigate(['contacts'], navigationExtras);
  }

}
