import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../../services/books/books.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SnackBarService} from '../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book: Book;
  bookId: string;
  error: null;
  submitting = false;
  createBookForm: FormGroup;

  constructor(private stateParams: ActivatedRoute,
              private formBuilder: FormBuilder,
              private snackBarService: SnackBarService,
              private bookService: BooksService) {
  }

  ngOnInit() {
    this.setupForm();

    this.stateParams.params.subscribe((params) => {
      this.bookId = params['id'];
      if (this.bookId) {
        this.bookService.getBook(this.bookId).subscribe((book) => {
          this.book = book;
        });
      }
    });
  }

  addBook() {

    if (!this.createBookForm.valid) {
      return;
    }

    this.submitting = true;
    const book = this.createBookForm.value;
    book.year = +book.year; // temp casting to number
    setTimeout(() => {
      this.submitting = false;
      // because backend response to quickly
    }, 1000);

    this.bookService.addBook(book).subscribe((data) => {
        // this.submitting = false;
        // add modal with ability to create new ?
        this.resetForm(this.createBookForm);
        this.showSnackBar();
      },
      resp => {
        this.error = resp.error.message;
      }
    );
  }

  private showSnackBar() {
    this.snackBarService.showSimple('Book was successfully added');
  }

  private setupForm() {
    this.createBookForm = this.formBuilder.group({
      clientTitle: [null,
        Validators.compose(
          [Validators.required, Validators.maxLength(500), Validators.minLength(2)])],
      description: [null,
        Validators.compose(
          [Validators.maxLength(5000), Validators.minLength(2)])],
      author: [null,
        Validators.compose(
          [Validators.maxLength(500), Validators.minLength(2)])],
      pages: [null,
        Validators.compose(
          [Validators.pattern(/^[+]?\d+([.]\d+)?$/)])],
      year: [null, [Validators.compose([Validators.minLength(2), Validators.maxLength(100)])]],
      imagePath: [null]
    });
  }

  private resetForm(formGroup: FormGroup) {
    let control: AbstractControl = null;
    formGroup.reset();
    formGroup.markAsUntouched();
    Object.keys(formGroup.controls).forEach((name) => {
      control = formGroup.controls[name];
      control.setErrors(null);
    });
  }

}
