import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-detail-page.component.html',
  styleUrl: './contact-detail-page.component.scss'
})
export class ContactDetailPageComponent {

  id: any | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // vamos a leer los parámetros de la URL
    this.route.params.subscribe(
      (params: any) => {
      if(params.id) {
        this.id = params.id;
      }
    });

      


  }

}
