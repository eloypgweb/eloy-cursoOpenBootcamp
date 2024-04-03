import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');
    // if (token) {
    //   this.router.navigate(['home']);
    // }
  }

  loginUser() {
    sessionStorage.setItem('token', '123456789');
    this.router.navigate(['contacts']);
  }

}
