import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {AuthGuard} from './guard/auth-guard.guard';
import {AuthComponent} from './components/auth/auth.component';
import {LoginComponent} from './components/auth/signin/signin.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {BookComponent} from './components/book/book.component';
import {ListComponent} from './components/list/list.component';
import {WishListComponent} from './components/wish-list/wish-list.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AdminGuard} from './guard/admin.guard';
import {SignUpComponent} from './components/auth/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', redirectTo: 'content', pathMatch: 'full'},
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {path: '', redirectTo: 'signin', pathMatch: 'full'},
      {path: 'signin', component: LoginComponent},
      {path: 'signup', component: SignUpComponent},
      {path: '404', component: NotFoundComponent},
      {path: '**', redirectTo: '/404'}
    ]
  },
  {
    path: 'content',
    canActivate: [AuthGuard],
    component: MainComponent,
    children: [
      {
        path: 'books',
        component: ListComponent,
        children: [
          // {path: '', component: ListComponent},
          // {path: 'book', component: BookComponent},
          {path: ':id', component: BookComponent}
        ]
      },
      {path: 'create-book', component: BookComponent, canActivate: [AdminGuard]},
      {path: 'wishlist', component: WishListComponent},
      {path: 'profile', component: ProfileComponent},
      {path: '', redirectTo: 'books/', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
