import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,
  MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatSliderModule, MatSnackBarModule, MatTabsModule, MatToolbarModule
} from '@angular/material';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

const modules = [
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatTabsModule,
  MatMenuModule,
  MatToolbarModule,
  MatSliderModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatProgressBarModule,
  MatSnackBarModule,
  ScrollDispatchModule
];
@NgModule({
  imports: [ modules ],
  exports: [ modules ]
})
export class MaterialModule { }
