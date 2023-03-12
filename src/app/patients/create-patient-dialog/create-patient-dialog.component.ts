import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-create-patient-dialog',
  templateUrl: './create-patient-dialog.component.html',
  styleUrls: ['./create-patient-dialog.component.scss']
})
export class CreatePatientDialogComponent implements OnInit {

  patient_name!: string;
  illenes!: string;

  constructor(
    public dialogRef: MatDialogRef<CreatePatientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private generalService: GeneralServiceService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  changeName(event: string) {
    this.patient_name = event;
  }

  changeIllenes(event: string) {
    this.illenes = event;
  }

  closeModal() {
    this.dialogRef.close();
  }

  cancelCreate() {
    this.dialogRef.close();
  }

  createPatient() {
    if (this.patient_name != '' || this.illenes != '') {
      const new_patient = {
        value: this.patient_name,
        option: this.patient_name,
        illenes: this.illenes
      };
      
      this.generalService.listPatients.push(new_patient);
    }
    this.closeModal();
    this._router.navigateByUrl('/pacientes')
  }

}
