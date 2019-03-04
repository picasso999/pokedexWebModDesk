import { Component, OnInit } from '@angular/core';

// import { AngularFireAuth } from '@angular/fire/auth';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  providers = AuthProvider;

  constructor(private router: Router,
              // private afAuth: AngularFireAuth,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  success(content: any) {
      this.snackBar.open(`Welcome ${content.displayName}`, 'OK', {
        duration: 5000
      });
      this.router.navigate(['/pokemon']);
    }
  }


