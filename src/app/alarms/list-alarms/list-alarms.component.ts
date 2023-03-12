import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlarmDetailDialogComponent } from '../alarm-detail-dialog/alarm-detail-dialog.component';

export interface AlarmModel {
  id: number,
  medicine: string,
  patient: string,
  hour: string,
  photo: any,
  frecuency: string
  contact: string
}

@Component({
  selector: 'app-list-alarms',
  templateUrl: './list-alarms.component.html',
  styleUrls: ['./list-alarms.component.scss']
})
export class ListAlarmsComponent implements OnInit {

  alarmsList: AlarmModel[] = [];

  constructor(
    public dialog: MatDialog
  ) {
    this.alarmsList = [
      {
        id: 1,
        medicine: "Omeprazol",
        patient: "Maria Lara",
        hour: "06:00 a.m.",
        photo: "../../../assets/images/medicinas.jpeg",
        frecuency: "Cada 3 dias",
        contact: "3215649870"
      },
      {
        id: 2,
        medicine: "Atorbastania",
        patient: "Maria Lara",
        hour: "06:00 a.m.",
        photo: "assets/images/medicinas.jpeg",
        frecuency: "Cada 3 dias",
        contact: "3215649870"
      },
      {
        id: 3,
        medicine: "Acetaminofen",
        patient: "Maria Lara",
        hour: "06:00 a.m.",
        photo: "assets/images/medicinas.jpeg",
        frecuency: "Cada 3 dias",
        contact: "3215649870"
      },
      {
        id: 4,
        medicine: "Aspirina",
        patient: "Maria Lara",
        hour: "06:00 a.m.",
        photo: "assets/images/medicinas.jpeg",
        frecuency: "Cada 3 dias",
        contact: "3215649870"
      }
    ]
  }

  ngOnInit(): void {
  }

  clickButton(alarm: AlarmModel) {
    this.dialog.open(AlarmDetailDialogComponent, {
      data: {
        alarm
      },
      width: '625px',
      height: '740px',
      panelClass: 'modal-detail'
    });
  }
}
