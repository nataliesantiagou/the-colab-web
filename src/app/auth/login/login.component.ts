import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralServiceService } from 'src/app/services/general-service.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CustomDialogComponent } from 'src/app/components/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  dataUser: any;

  constructor(
    private _router: Router,
    private generalService: GeneralServiceService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataUser = this.generalService.getDataUser();
    if (this.dataUser.isNew) {
      this.dialog.open(CustomDialogComponent, {
        data: {
          animal: 'panda',
        },
        width: '310px',
        height: '230px',
        panelClass: 'modal-success'
      });
    }
  }

  valueChange(event: any) {
    console.log(event);
  }

  valueChangePassword(event: any) {
    console.log(event);
  }

  clickButton() {
    this.generalService.dataLogin.isLogin = true;
    this._router.navigateByUrl('/recordatorios')
  }

  clickButtonAccount() {
    this._router.navigateByUrl('/crear-cuenta');
  }

}
