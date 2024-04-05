import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from '../service/consumo-api.service';
import { NgFor } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-consumo',
  standalone: true,
  imports: [HttpClientModule, NgFor, MatCard, MatCardContent],
  templateUrl: './consumo.component.html',
  styleUrl: './consumo.component.scss',
})
export class ConsumoComponent implements OnInit {
  data: any[] = [];

  constructor(private apiService: ConsumoApiService) {}

  ngOnInit() {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getData().subscribe((data) => {
      this.data = data.results; // Asume que "results" es el array en el objeto devuelto
      console.log(this.data);
    });
  }
}
