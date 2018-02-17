import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class SnackBarService {


  constructor(private snackBar: MatSnackBar) {
  }

  showSimple(text: string) {
    this.snackBar.open(text, null, {
      duration: 700,
      panelClass: 'custom-snack-bar'
    });
  }

}
