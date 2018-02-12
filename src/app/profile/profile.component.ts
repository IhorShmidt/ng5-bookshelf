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
  userInitials = ' ? ';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.user$.subscribe(
      userData => {
        if (userData.firstName && userData.lastName) {
          this.userInitials = `${userData.firstName} ${userData.lastName}`;
        }
      }
    );
  }

  modelChanged(event, type) {
    console.log(event, type);
  }



}
