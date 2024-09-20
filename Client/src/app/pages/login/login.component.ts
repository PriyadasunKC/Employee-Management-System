import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  emailError: boolean = false;
  passwordError: boolean = false;
  formSubmitted: boolean = false;

  validateEmailFormat(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    return emailRegex.test(email);
  }

  validatePassword(password: string): boolean {
    return password.length > 0;
  }

  login() {
    this.formSubmitted = true;
    this.emailError = !this.validateEmailFormat(this.email);
    this.passwordError = !this.validatePassword(this.password);

    if (!this.emailError && !this.passwordError) {
      console.log('Login successful', this.email, this.password);
      // Add your API call to authenticate the user here
    }
  }
}