import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CustomInputComponent } from './custom-input.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CustomInputComponent
  ],
  imports: [
    MatInputModule,
    FormsModule,
    NgxMatTimepickerModule,
    CommonModule,
    MatTooltipModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [CustomInputComponent],
  exports: [CustomInputComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]  
})
export class CustomInputModule { }
