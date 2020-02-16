import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  private ionicForm: FormGroup;
  userData = {
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private formBuilder: FormBuilder, public afAuth: AngularFireAuth) {
    this.ionicForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      lastName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[^@ ]+@[^@ ]+\.[^@ \.]{2,}$')
      ])),
      tel: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]{10}')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        // Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])')
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        // Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])')
      ]))
    }, {
      validators: this.matchingPassword.bind(this)
    });
  }

  matchingPassword(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  signUp() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.userData.email, this.userData.password);
    this.userData = {
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      password: '',
      confirmPassword: '',
    };
  }

  ngOnInit() {
  }

}
