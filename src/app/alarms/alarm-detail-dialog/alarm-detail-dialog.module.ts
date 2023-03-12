import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomButtontModule } from 'src/app/components/custom-button/custom-button.module';
import { AlarmDetailDialogComponent } from './alarm-detail-dialog.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AlarmDetailDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomButtontModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AlarmDetailDialogComponent],
  exports: [AlarmDetailDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AlarmDetailDialogModule { }
