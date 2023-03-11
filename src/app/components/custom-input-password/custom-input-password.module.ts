import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CustomInputPasswordComponent } from './custom-input-password.component';

@NgModule({
  declarations: [
    CustomInputPasswordComponent
  ],
  imports: [
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CustomInputPasswordComponent],
  exports: [CustomInputPasswordComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CustomInputPasswordModule { }
