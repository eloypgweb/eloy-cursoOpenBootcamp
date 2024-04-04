import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// Ejemplo básico de formulario activo

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormField,
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCard,
    MatCardContent,
    MatIcon,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  constructor(private fb: FormBuilder) {}

  get name() {
    return this.form.get('name') as FormControl;
  }
  get email() {
    return this.form.get('email') as FormControl;
  }

  procesarFormulario() {
    if (this.form.valid) {
      console.log('Formulario válido', this.form.value);
    } else {
      console.log('Formulario inválido');
    }
  }

  // Usando FormBuilder y FormGroup con instancia de FormControl
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  // Usando FormControl
  /*
  name = new FormControl('', Validators.required),
  email = new FormControl('', [Validators.required, Validators.email])
  */

  // Usando FormGroup y e instanciando FormControl
  /* 
    form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    }); 
  */
}
