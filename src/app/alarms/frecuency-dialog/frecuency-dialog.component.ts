import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-frecuency-dialog',
  templateUrl: './frecuency-dialog.component.html',
  styleUrls: ['./frecuency-dialog.component.scss']
})
export class FrecuencyDialogComponent implements OnInit {

  numbers = [
    {
      value: 1,
      option: 1
    },
    {
      value: 2,
      option: 2
    },
    {
      value: 3,
      option: 3
    },
    {
      value: 4,
      option: 4
    },
    {
      value: 5,
      option: 5
    }
  ]

  frecuencies = [
    {
      value: 'Dias',
      option: 'Dias'
    },
    {
      value: 'Semanas',
      option: 'Semanas'
    },
    {
      value: 'Meses',
      option: 'Meses'
    }
  ]

  constructor(
    public dialogRef: MatDialogRef<FrecuencyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

  clickButton() {
    this.dialogRef.close();
  }


}
