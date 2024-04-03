import { Component } from '@angular/core';
import { IContacto } from '../../models/contact.interface';
import { NgFor } from '@angular/common';
import { ActivatedRoute, NavigationExtras, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacts-page',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss'
})
export class ContactsPageComponent {

  listaContactos: IContacto[] = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', email: 'juanperez@seidor.es', sexo: 'hombre'},
    { id: 2, nombre: 'Pedro', apellido: 'Gomez', email:  'pedrogomez@seidor.es', sexo: 'hombre'},
    { id: 3, nombre: 'Maria', apellido: 'Lopez', email:  'marialopez@seidor.es', sexo: 'mujer'},
    { id: 4, nombre: 'Laura', apellido: 'Garcia', email:  'lauragarcia@seidor.es', sexo: 'mujer'}
  ];


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // Obtenemos los query params
    this.route.queryParams.subscribe((params: any) => {
      console.log('Query param: ',params.sexo);
    })

  }

  // Ejemplo de paso de info entre componentes a través del ESTADO
  volverAHome(contacto: IContacto) {

    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      }
    };

    this.router.navigate(['home'], navigationExtras);
  }

}
