import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {environment} from '../../../environments/environment';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class AuthService {
  public token: string;
  public apiUrl: string;

  private userSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  user$: Observable<any> = this.userSubject.asObservable();


  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    }
    this.apiUrl = `${environment.apiUrl}/auth`;
  }

  logIn(email: string, password: string) {
    return this.http.post(this.apiUrl, {email, password}).flatMap(res => {
        localStorage.setItem('token', res['token']);
        localStorage.setItem('user', JSON.stringify(res['user']));
        this.token = res['token'];
        this.setUser(res['user']);
        this.router.navigate(['/']);
        return Observable.of(true);
      }
    );
  }

  checkToken(token?: string) {
    this.token = localStorage.getItem('token') || token;
    const user = localStorage.getItem('user');
    if (!this.token) {
      this.router.navigate(['auth']);
      return false;
    }
    return this.http.get(this.apiUrl, {responseType: 'text'})
      .toPromise()
      .then(res => {
        if (user) {
          this.setUser(JSON.parse(user));
        }
        return true;
      });
  }

  setUser(userData) {
    this.userSubject.next(userData);
  }

  logOut() {
    localStorage.clear();
    return this.router.navigate(['/auth/login']).then(() => this.token = undefined);
  }

  isAdmin() {
   return true;
  }
}
