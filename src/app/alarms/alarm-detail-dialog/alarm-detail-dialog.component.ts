import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-alarm-detail-dialog',
  templateUrl: './alarm-detail-dialog.component.html',
  styleUrls: ['./alarm-detail-dialog.component.scss']
})
export class AlarmDetailDialogComponent implements OnInit {

  dataAlarm: any;

  constructor(
    public dialogRef: MatDialogRef<AlarmDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private generalService: GeneralServiceService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.dataAlarm = this.data.alarm;
  }

  clickButton(dataAlarm: any) {
    this.generalService.dataAlarm = dataAlarm;
    this.dialogRef.close();
    this._router.navigateByUrl('/editar-recordatorio')
  }

  closeModal() {
    this.dialogRef.close();
  }
}
