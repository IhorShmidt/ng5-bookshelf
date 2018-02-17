import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth/auth.service';
import {Router} from '@angular/router';
import {SnackBarService} from '../../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  error: null;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private snackBarService: SnackBarService,
              private authService: AuthService) {
  }

  ngOnInit() {

    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(80)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(80)])],
      skype: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(80)])]
    });
  }

  signUp() {
    if (!this.signUpForm.valid) {
      return;
    }

    return this.authService.signUp(this.signUpForm.value)
      .then(() => {
        this.snackBarService.showSimple('Welcome to Book shelf');
      })
      .catch(resp => {
        this.error = resp.error.message;
      });
  }

}
