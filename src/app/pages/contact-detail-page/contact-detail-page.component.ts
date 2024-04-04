import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContacto } from '../../models/contact.interface';
import { NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-contact-detail-page',
  standalone: true,
  imports: [NgIf, MatButtonModule, MatCardModule],
  templateUrl: './contact-detail-page.component.html',
  styleUrl: './contact-detail-page.component.scss'
})
export class ContactDetailPageComponent {

  id: any | undefined;
  contacto: IContacto | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // vamos a leer los parámetros de la URL
    this.route.params.subscribe(
      (params: any) => {
      if(params.id) {
        this.id = params.id;
      }
    });

    // Leer también el state del contacto
    if(history.state.data){
      this.contacto = history.state.data;
    }


  }

}
