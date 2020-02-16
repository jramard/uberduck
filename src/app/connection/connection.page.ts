import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})
export class ConnectionPage implements OnInit {
  private ionicForm: FormGroup;
  userData = {
    email: '',
    password: ''
  };
  connected: boolean;

  constructor(private formBuilder: FormBuilder, public afAuth: AngularFireAuth, private router: Router) {
    this.ionicForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[^@ ]+@[^@ ]+\.[^@ \.]{2,}$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        // Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])')
      ]))
    });
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('Not connected');
        this.connected = false;
      } else {
        console.log('Connected as ' + auth.email);
        this.connected = true;
        this.router.navigate(['home']);
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.userData.email, this.userData.password);
    this.userData = {
      email: '',
      password: ''
    };
  }

  ngOnInit() {
  }

}
