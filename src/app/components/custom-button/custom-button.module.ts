import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CustomButtonComponent } from './custom-button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CustomButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CustomButtonComponent],
  exports: [CustomButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CustomButtontModule { }
