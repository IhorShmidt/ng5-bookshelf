import {Component, OnInit} from '@angular/core';
import {BooksService} from '../../services/books/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books: any = [];

  constructor(private bookService: BooksService) {
  }

  ngOnInit() {
    this.bookService.list()
      .subscribe((list) => {
        this.books = list;
      });
  }

}
