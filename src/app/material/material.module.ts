import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  exports: [
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
