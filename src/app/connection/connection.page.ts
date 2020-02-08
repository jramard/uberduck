import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})
export class ConnectionPage implements OnInit {
  private ionicForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.ionicForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[^@ ]+@[^@ ]+\.[^@ \.]{2,}$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])')
      ]))
    });
  }

  ngOnInit() {
  }

}
