import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class Toast {
    constructor(private snackBar: MatSnackBar) {}

    public show(message: string, action: string = 'Close') {
        this.snackBar.open(message, action, {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
            panelClass: ['toast'],
        });
    }
}
