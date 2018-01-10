import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {environment} from '../../../environments/environment';


@Injectable()
export class AuthService {
  public token: string;
  public apiUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.token = localStorage.getItem('token');
    }
    this.apiUrl = `${environment.apiUrl}/auth`;
  }

  logIn(email: string, password: string) {
    return this.http.post(this.apiUrl, {email, password}).flatMap(res => {
        localStorage.setItem('token', res['token']);
        localStorage.setItem('user', JSON.stringify(res['user']));
        this.token = res['token'];
        this.router.navigate(['/']);
        return Observable.of(true);
      }
    );
  }

  checkToken(token?: string) {
    this.token = localStorage.getItem('token') || token;
    if (!this.token) {
      this.router.navigate(['auth']);
      return false;
      // return !!this.token;
    }
    return this.http.get(this.apiUrl).map(res => true);
  }

  logOut() {
    localStorage.clear();
    return this.router.navigate(['/auth/login']).then(() => this.token = undefined);
  }
}
