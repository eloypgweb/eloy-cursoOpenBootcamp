import { Component } from '@angular/core';
import { IContacto } from '../../models/contact.interface';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacts-page',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss'
})
export class ContactsPageComponent {

  listaContactos: IContacto[] = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', email: 'juanperez@seidor.es' },
    { id: 2, nombre: 'Pedro', apellido: 'Gomez', email:  'pedrogomez@seidor.es' },
    { id: 3, nombre: 'Maria', apellido: 'Lopez', email:  'marialopez@seidor.es' },
    { id: 4, nombre: 'Laura', apellido: 'Garcia', email:  'lauragarcia@seidor.es' }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
