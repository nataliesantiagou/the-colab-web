import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CustomInputComponent } from './custom-input.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CustomInputComponent
  ],
  imports: [
    MatInputModule,
    FormsModule,
    NgxMatTimepickerModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [CustomInputComponent],
  exports: [CustomInputComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]  
})
export class CustomInputModule { }
