import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.page.html',
  styleUrls: ['./account-info.page.scss'],
})
export class AccountInfoPage implements OnInit {
  private ionicForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public afAuth: AngularFireAuth) {
    this.ionicForm = new FormGroup({
      firstName: new FormControl('Julien', Validators.compose([
        Validators.minLength(2)
      ])),
      lastName: new FormControl('Ramard', Validators.compose([
        Validators.minLength(2)
      ])),
      email: new FormControl(afAuth.auth.currentUser.email, Validators.compose([
        Validators.pattern('^[^@ ]+@[^@ ]+\.[^@ \.]{2,}$')
      ])),
      tel: new FormControl('0672161110', Validators.compose([
        Validators.pattern('[0-9]{10}')
      ])),
      password: new FormControl('Mot2P@sse', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        // Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])')
      ]))
    });
  }

  ngOnInit() {
  }

}
