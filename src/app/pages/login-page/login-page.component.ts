import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, MatButtonModule, MatTooltipModule, MatIconModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    let token = sessionStorage.getItem('token');
    // if (token) {
    //   this.router.navigate(['home']);
    // }
  }

  loginUser() {

    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        if (response.token) {
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['contacts']);
        }
      },
      (error) => console.log('Ha habido un error: ',error),
      () => console.log('Petición completa')
    )


    sessionStorage.setItem('token', '123456789');
    this.router.navigate(['contacts']);
  }

}
