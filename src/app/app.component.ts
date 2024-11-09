import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {

  parentSubject:Subject<string> = new Subject();

  constructor(private snackBar: MatSnackBar) {

  }

  
  cardAnimation(value: any) {

  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 500, 
    });
  }

  Interested(){
    this.openSnackBar('Interested', 'Close');
    this.parentSubject.next('swiperight');

  }
  NotInterested(){
    this.openSnackBar('NotInterested', 'Close');
    this.parentSubject.next('swipeleft');
  }


  Shortlisted(){
    this.openSnackBar('Shortlisted', 'Close');
    this.parentSubject.next('swiperight');
  }
}
