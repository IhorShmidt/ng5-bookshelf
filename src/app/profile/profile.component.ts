import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserInterface} from '../interfaces/user-interface';
import {AuthService} from '../services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user$: Observable<UserInterface>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.user$;
  }

}
