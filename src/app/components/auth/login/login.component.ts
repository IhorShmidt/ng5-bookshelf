import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ok;

  constructor(private authService: AuthService) {
  }

  checkValidation(form: NgForm) {
    const value = form.value;
    this.logIn(value.email, value.password);
  }

  logIn(email: string, password: string) {
    this.authService.logIn(email, password).subscribe(
    () => this.ok = true,
    () => this.ok = false);
  }

}
