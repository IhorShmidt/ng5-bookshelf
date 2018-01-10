import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Book} from '../../models/book';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BooksService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/book`;
  }

  addBook(book: Book): Observable<any> {
    return this.http.post(this.apiUrl, book);
  }

  list() {
    return this.http.get(this.apiUrl);
  }

  removeBook(book: Book): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${book._id}`);
  }

  getBook(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getBooks(limit, offset): Observable<any> {
    const params = new HttpParams()
      .set('limit', limit)
      .set('offset', offset);
    return this.http.get(this.apiUrl, {params});
  }

}
