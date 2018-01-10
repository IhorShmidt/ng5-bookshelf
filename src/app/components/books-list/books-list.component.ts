import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books: Book[];

  constructor() {
  }

  ngOnInit() {
  }

}
