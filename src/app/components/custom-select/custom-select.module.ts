import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CustomSelectComponent } from './custom-select.component';
import { MatOptionModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [
    CustomSelectComponent
  ],
  imports: [
    MatSelectModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [CustomSelectComponent],
  exports: [CustomSelectComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CustomSelectPasswordModule { }
