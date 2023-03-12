import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CustomButtontModule } from '../../components/custom-button/custom-button.module';
import { CustomInputPasswordModule } from 'src/app/components/custom-input-password/custom-input-password.module';
import { CustomInputModule } from 'src/app/components/custom-input/custom-input.module';

import { CreateAccountComponent } from './create-account.component';


@NgModule({
  declarations: [
    CreateAccountComponent,
  ],
  imports: [
    CustomInputModule,
    CustomInputPasswordModule,
    CustomButtontModule
  ],
  providers: [],
  bootstrap: [CreateAccountComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CreateAccountModule { }
