import {AuthService} from '../../../services/auth/auth.service';
import {Router} from '@angular/router';
import {Component, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {


  loginForm: FormGroup;
  error = '';

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService) {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    });

  }


  //
  // checkValidation(form: NgForm) {
  //   const value = form.value;
  //   this.logIn(value.email, value.password);
  // }

  logIn(formValue: any) {
    const { email, password } = formValue;
    this.authService.logIn(email, password)
      .subscribe(
      success => {
        // this.router.navigate(['../']);
      },
      err => {
        this.error = 'Invalid username or password';
      }
    );
  }

}
