import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomDialogComponent } from 'src/app/components/custom-dialog/custom-dialog.component';
import { GeneralServiceService } from 'src/app/services/general-service.service';
import { FrecuencyDialogComponent } from '../frecuency-dialog/frecuency-dialog.component';
import { SpecificDaysDialogComponent } from '../specific-days-dialog/specific-days-dialog.component';

@Component({
  selector: 'app-alarm-edit',
  templateUrl: './alarm-edit.component.html',
  styleUrls: ['./alarm-edit.component.scss']
})
export class AlarmEditComponent implements OnInit {

  listPatients: any = [];
  dataAlarm: any;
  listFrecuencies: any = [];
  selectedTime: any;

  constructor(
    private generalService: GeneralServiceService,
    public dialog: MatDialog,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.listPatients = this.generalService.getListPatients();
    this.dataAlarm = this.generalService.getDataAlarm();
    this.listFrecuencies = this.generalService.getListFrecuencies();
  }

  change(event: any) {
    if (event === 'Dias especificos') {
      this.dialog.open(SpecificDaysDialogComponent, {
        width: '460px',
        height: '615px',
        panelClass: 'modal-days'
      });
    } else if (event == 'Intervalo de dias') {
      this.dialog.open(FrecuencyDialogComponent, {
        width: '460px',
        height: '370px',
        panelClass: 'modal-frecuency'
      });
    }
  }

  clickButton() {
    this._router.navigateByUrl('/recordatorios')
  }

  clickButtonSave() {
    this.dialog.open(CustomDialogComponent, {
      data: {
        isEdit: true,
      },
      width: '310px',
      height: '230px',
      panelClass: 'modal-success'
    });
  }
}
