import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CustomButtontModule } from 'src/app/components/custom-button/custom-button.module';
import { CustomInputPasswordModule } from 'src/app/components/custom-input-password/custom-input-password.module';
import { CustomInputModule } from 'src/app/components/custom-input/custom-input.module';
import {MatDialogModule} from '@angular/material/dialog';

import { LoginComponent } from './login.component';
import { CustomDialogModule } from 'src/app/components/custom-dialog/custom-dialog.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CustomInputModule,
    CustomInputPasswordModule,
    CustomButtontModule,
    MatDialogModule,
    CustomDialogModule
  ],
  providers: [],
  bootstrap: [LoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class LoginModule { }
