import { Component } from '@angular/core';
import { IContacto } from '../../models/contact.interface';
import { NgFor } from '@angular/common';
import { ActivatedRoute, NavigationExtras, Router, RouterLink } from '@angular/router';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-contacts-page',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.scss'
})
export class ContactsPageComponent {

  filtroSexo: string = 'todos';
  listaContactos: IContacto[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {

    // Obtenemos los query params
    this.route.queryParams.subscribe((params: any) => {
      console.log('Query param: ',params.sexo);
      if(params.sexo){
        this.filtroSexo = params.sexo;
      }
      // Obtenemos la lista de contactos
      this.contactService.obternerContactos(this.filtroSexo)
      .then(
        (lista) => this.listaContactos = lista
      ).catch((error) => { console.error('Ha habido un error al obtener los contactos: ', error); })
      .finally(() => { console.info('Petición finalizada'); });
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
