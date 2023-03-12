import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-specific-days-dialog',
  templateUrl: './specific-days-dialog.component.html',
  styleUrls: ['./specific-days-dialog.component.scss']
})
export class SpecificDaysDialogComponent implements OnInit {

  days: any = []

  constructor(
    public dialogRef: MatDialogRef<SpecificDaysDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private generalService: GeneralServiceService,
  ) {
    this.days = [
      {
        value: "Lunes",
        checked: false
      },
      {
        value: "Martes",
        checked: false
      },
      {
        value: "Miercoles",
        checked: false
      },
      {
        value: "Jueves",
        checked: false
      },
      {
        value: "Viernes",
        checked: false
      },
      {
        value: "Sábado",
        checked: false
      },
      {
        value: "Domingo",
        checked: false
      }
    ]
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

  clickButton() {
    this.dialogRef.close();
  }

}
