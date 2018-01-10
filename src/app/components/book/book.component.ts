import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../../services/books/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book: Book = {
    _id: undefined,
    clientTitle:  '',
    description: '',
    author: '',
    viewsCount: 0,
    rating: 0,
    pages: 0,
    year: new Date(),
    addedBy: '',
    state: undefined,
    bookedBy: undefined,
    busyBy: undefined,
    liked: 0,
    disLiked: 0
  };
  bookId: string;

  constructor(private stateParams: ActivatedRoute, private bookService: BooksService) {
  }

  addBook() {
    this.bookService.addBook(this.book).subscribe((data) => {
      console.log(data);
      this.book = data;
    });
  }

  ngOnInit() {
    this.stateParams.params.subscribe((params) => {
      this.bookId = params['id'];
      if (this.bookId) {
        this.bookService.getBook(this.bookId).subscribe((book) => {
          this.book = book;
        });
      }
    });
  }

}
