import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainComponent} from './components/main/main.component';
import {BooksListComponent} from './components/books-list/books-list.component';
import {ListComponent} from './components/list/list.component';
import {BookComponent} from './components/book/book.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {WishListComponent} from './components/wish-list/wish-list.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LoginComponent} from './components/auth/login/login.component';
import {AuthComponent} from './components/auth/auth.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BooksService} from './services/books/books.service';
import {AuthGuard} from './guard/auth-guard.guard';
import {AuthService} from './services/auth/auth.service';
import {appInterceptors} from './interceptors/auth.interceptors';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    LoginComponent,
    NotFoundComponent,
    BooksListComponent,
    ListComponent,
    BookComponent,
    FooterComponent,
    NavbarComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    appInterceptors,
    BooksService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
