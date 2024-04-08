import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ejemplo-pipes',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
  ],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.scss',
})
export class EjemploPipesComponent {
  dob = new Date(2004, 6, 31);
  cambio: boolean = true;
  nombre: string = 'Francis';

  constructor() {}

  ngOnInit(): void {}

  get dateFormat() {
    return this.cambio ? 'shortDate' : 'fullDate';
  }

  cambiarFormato() {
    this.cambio = !this.cambio;
  }
}
