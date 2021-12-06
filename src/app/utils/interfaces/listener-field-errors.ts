import { AbstractControl } from "@angular/forms";
let msgErrorsUsername = [];
const errors_field_username: any = {
  required: 'es requerdio el campo username',
};
function listenerField(field: AbstractControl | null) {
  field?.valueChanges.subscribe(() => {
    typeErrorFieldForm(field);
  });
}

function typeErrorFieldForm(field: AbstractControl | null) {
  msgErrorsUsername = [];
  if (field) {
    if ((field.touched || field.dirty) && field.errors) {
      msgErrorsUsername = Object.keys(field.errors).map(
        (err: string) => errors_field_username[err]
      );
    }
  }
}
