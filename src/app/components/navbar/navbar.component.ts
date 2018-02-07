import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {UserInterface} from '../../interfaces/user-interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  user$: Observable<UserInterface>;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.user$ = this.authService.user$;
  }

  logOut() {
    this.authService.logOut();
  }

  navigateToProfile() {
    this.router.navigate(['profile'], {relativeTo: this.route});
  }

}
