import { NgIf } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

// Importamos lo necesario para construir el formulario

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatFormField,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  @Output() loginAction: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submitLogin() {
    if (this.loginForm.valid) {
      console.log('Formulario válido');
      // console.log(this.loginForm.value);
      this.loginAction.emit(this.loginForm.value);
      // this.loginForm.reset();
    } else {
      console.log('Formulario inválido');
    }
  }
}
