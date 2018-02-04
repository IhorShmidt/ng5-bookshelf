import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule,
  // MatPlaceholder,
  MatSliderModule, MatTabsModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatTabsModule,
  // MatPlaceholder,
  MatSliderModule
];
@NgModule({
  imports: [ modules ],
  exports: [ modules ]
})
export class MaterialModule { }
