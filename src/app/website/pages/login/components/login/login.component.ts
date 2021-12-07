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
    required: 'Username is required',
    minlength: "Debe tener un minimo de 5 caracteres",
    maxlength: "Debe tener un maximo de 16 caracteres"
  };

  errors_field_password: any = {
    required: 'Password is required',
    minlength: "Debe tener un minimo de 8 caracteres",
    maxlength: "Debe tener un maximo de 16 caracteres"
  };
  msgErrorsUsername: string[] = [];
  msgErrorsPassword: string[] = [];
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
    this.listenerUsernameField();
    this.listenerPasswordField();
  }

  get usernameField() {
    return this.registerForm.get('username');
  }

  listenerUsernameField() {
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

  listenerPasswordField() {
    this.passwordField?.valueChanges.subscribe(() => {
      this.errorsMsgPasswordField(this.passwordField);
    });
  }

  errorsMsgPasswordField(field: AbstractControl | null) {
    this.msgErrorsPassword = [];
    if (field) {
      if ((field.touched || field.dirty) && field.errors) {
        this.msgErrorsPassword = Object.keys(field.errors).map(
          (err: string) => this.errors_field_password[err]
        );
      }
    }
  }

  onMenuOpciones() {
    this._router.navigate(['/opciones']).then();
  }

  registar() {}
}
