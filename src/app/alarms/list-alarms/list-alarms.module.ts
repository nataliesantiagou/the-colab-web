import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListAlarmsComponent } from './list-alarms.component';
import { CustomButtontModule } from 'src/app/components/custom-button/custom-button.module';
import { AlarmDetailDialogModule } from '../alarm-detail-dialog/alarm-detail-dialog.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ListAlarmsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomButtontModule,
    AlarmDetailDialogModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [ListAlarmsComponent],
  exports: [ListAlarmsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ListAlarmsModule { }
