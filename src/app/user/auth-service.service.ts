import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { User } from '../shared/interfaces/user';

// import { User } from '@firebase/auth-types';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user$: Observable<User | null>;
  user: User;

  constructor(private http: HttpClient,
              private router: Router,
              public afAuth: AngularFireAuth,
              private snackBar: MatSnackBar) {
                this.user$ = this.afAuth.authState;
                this.afAuth.authState.subscribe(user => {
                  if (user) {
                    this.user = user;
                    localStorage.setItem('user', JSON.stringify(this.user));
                  } else {
                    localStorage.setItem('user', null);
                  }
                })
              }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.snackBar.open(`You've Signed Out`, 'OK', {
        duration: 5000
      });
      this.router.navigate(['/user/login']);
    })
  }

  private handleError(res: HttpErrorResponse) {
    console.log(res);
    return throwError(res.error || 'server eroor' );
  }

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
}
}
