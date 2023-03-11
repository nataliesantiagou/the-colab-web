import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CustomDialogComponent } from './custom-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomButtontModule } from '../custom-button/custom-button.module';

@NgModule({
  declarations: [
    CustomDialogComponent
  ],
  imports: [
    MatInputModule,
    MatDialogModule,
    FormsModule,
    CustomButtontModule
  ],
  providers: [],
  bootstrap: [CustomDialogComponent],
  exports: [CustomDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]  
})
export class CustomDialogModule { }
