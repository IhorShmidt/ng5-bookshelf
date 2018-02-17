import {AuthService} from '../../../services/auth/auth.service';
import {Router} from '@angular/router';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  error = '';

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService) {


  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    });
  }

  logIn() {
    if (!this.loginForm.valid) {
      return;
    }
    const {email, password} = this.loginForm.value;
    this.authService.logIn(email, password)
      .subscribe(
        success => {
          // this.router.navigate(['../']);
        },
        resp => {
          this.error = resp.error.message;
        }
      );
  }

}
