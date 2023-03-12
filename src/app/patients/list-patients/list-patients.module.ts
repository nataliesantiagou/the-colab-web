import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomButtontModule } from 'src/app/components/custom-button/custom-button.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ListPatientsComponent } from './list-patients.component';
import { MatIconModule } from '@angular/material/icon';
import { CreatePatientDialogModule } from '../create-patient-dialog/create-patient-dialog.module';

@NgModule({
  declarations: [
    ListPatientsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomButtontModule,
    MatDialogModule,
    MatIconModule,
    CreatePatientDialogModule
  ],
  providers: [],
  bootstrap: [ListPatientsComponent],
  exports: [ListPatientsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ListPatientsModule { }
