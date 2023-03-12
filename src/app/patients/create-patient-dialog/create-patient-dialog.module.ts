import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomButtontModule } from 'src/app/components/custom-button/custom-button.module';
import { CreatePatientDialogComponent } from './create-patient-dialog.component';
import { CustomInputModule } from 'src/app/components/custom-input/custom-input.module';
import {  MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CreatePatientDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomButtontModule,
    CustomInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [CreatePatientDialogComponent],
  exports: [CreatePatientDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CreatePatientDialogModule { }
