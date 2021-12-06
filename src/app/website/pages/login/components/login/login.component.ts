import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errors_field_username: any = {
    required: 'es requerdio el campo username',
  };
  msgErrorsUsername: any[] = [];
  //@ts-ignore
  registerForm: FormGroup;

  constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder
  ) {
    this.registerFormBuild();
  }

  ngOnInit(): void {}

  private registerFormBuild() {
    this.registerForm = this._formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(16),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
        ],
      ],
    });
    this.listenUsernameField();
  }

  get usernameField() {
    return this.registerForm.get('username');
  }

  listenUsernameField() {
    this.usernameField?.valueChanges.subscribe(() => {
      this.errorsMsgUsernameField(this.usernameField);
    });
  }

  errorsMsgUsernameField(field: AbstractControl | null) {
    this.msgErrorsUsername = [];
    if (field) {
      if ((field.touched || field.dirty) && field.errors) {
        this.msgErrorsUsername = Object.keys(field.errors).map(
          (err: string) => this.errors_field_username[err]
        );
      }
    }
  }

  get passwordField() {
    return this.registerForm.get('password');
  }

  onMenuOpciones() {
    this._router.navigate(['/opciones']).then();
  }

  registar() {}
}
