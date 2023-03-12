import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomButtontModule } from 'src/app/components/custom-button/custom-button.module';
import { MatIconModule } from '@angular/material/icon';
import { SpecificDaysDialogComponent } from './specific-days-dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    SpecificDaysDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomButtontModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [SpecificDaysDialogComponent],
  exports: [SpecificDaysDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SpecificDaysDialogModule { }
