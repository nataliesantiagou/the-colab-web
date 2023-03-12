import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GeneralServiceService } from 'src/app/services/general-service.service';
import { CreatePatientDialogComponent } from '../create-patient-dialog/create-patient-dialog.component';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss']
})
export class ListPatientsComponent implements OnInit {

  listPatients: any;

  constructor(
    private generalService: GeneralServiceService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.listPatients = this.generalService.getListPatients();
    console.log(this.listPatients);
    
  }

  createPatient() {
    this.dialog.open(CreatePatientDialogComponent, {
      data: {
      },
      width: '625px',
      height: '470px',
      panelClass: 'modal-create-patient'
    });
  }

}
