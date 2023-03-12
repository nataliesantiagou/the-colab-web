import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomButtontModule } from 'src/app/components/custom-button/custom-button.module';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FrecuencyDialogComponent } from './frecuency-dialog.component';
import { CustomSelectPasswordModule } from 'src/app/components/custom-select/custom-select.module';

@NgModule({
  declarations: [
    FrecuencyDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomButtontModule,
    MatIconModule,
    CustomSelectPasswordModule
  ],
  providers: [],
  bootstrap: [FrecuencyDialogComponent],
  exports: [FrecuencyDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class FrecuencyDialogModule { }
