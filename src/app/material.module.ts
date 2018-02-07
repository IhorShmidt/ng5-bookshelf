import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,
  MatSliderModule, MatTabsModule, MatToolbarModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatTabsModule,
  MatMenuModule,
  MatToolbarModule,
  MatSliderModule
];
@NgModule({
  imports: [ modules ],
  exports: [ modules ]
})
export class MaterialModule { }
