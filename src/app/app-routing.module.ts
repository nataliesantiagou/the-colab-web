import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmEditComponent } from './alarms/alarm-edit/alarm-edit.component';
import { ListAlarmsComponent } from './alarms/list-alarms/list-alarms.component';
import { CreateAccountComponent } from './auth/create-account/create-account.component';
import { LoginComponent } from './auth/login/login.component';
import { RecoverComponent } from './auth/recover/recover.component';
import { ListPatientsComponent } from './patients/list-patients/list-patients.component';
import { SuppliesComponent } from './supplies/supplies.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-cuenta', component: CreateAccountComponent },
  { path: 'recuperar-cuenta', component: RecoverComponent },
  { path: 'recordatorios', component: ListAlarmsComponent },
  { path: 'editar-recordatorio', component: AlarmEditComponent },
  { path: 'suministros', component: SuppliesComponent },
  { path: 'pacientes', component: ListPatientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
