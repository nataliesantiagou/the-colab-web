import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomButtontModule } from 'src/app/components/custom-button/custom-button.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AlarmEditComponent } from './alarm-edit.component';
import { CustomSelectPasswordModule } from 'src/app/components/custom-select/custom-select.module';
import { CustomInputModule } from 'src/app/components/custom-input/custom-input.module';
import { SpecificDaysDialogModule } from '../specific-days-dialog/specific-days-dialog.module';
import { FrecuencyDialogModule } from '../frecuency-dialog/frecuency-dialog.module';


@NgModule({
  declarations: [
    AlarmEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomButtontModule,
    MatDialogModule,
    CustomSelectPasswordModule,
    CustomInputModule,
    SpecificDaysDialogModule,
    FrecuencyDialogModule,
  ],
  providers: [],
  bootstrap: [AlarmEditComponent],
  exports: [AlarmEditComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AlarmEditModule { }
