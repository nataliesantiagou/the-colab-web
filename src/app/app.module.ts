import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { LoginModule } from './auth/login/login.module';
import { CreateAccountModule } from './auth/create-account/create-account.module';
import { RecoverModule } from './auth/recover/recover.module';
import { ListAlarmsModule } from './alarms/list-alarms/list-alarms.module';
import { AlarmEditModule } from './alarms/alarm-edit/alarm-edit.module';
import { AlarmDetailDialogModule } from './alarms/alarm-detail-dialog/alarm-detail-dialog.module';
import { SuppliesModule } from './supplies/supplies.module';
import { ListPatientsModule } from './patients/list-patients/list-patients.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    LoginModule,
    CreateAccountModule,
    RecoverModule,
    ListAlarmsModule,
    AlarmEditModule,
    AlarmDetailDialogModule,
    SuppliesModule,
    ListPatientsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
