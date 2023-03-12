import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(
    private _router: Router,
    private generalService: GeneralServiceService
  ) { }

  ngOnInit(): void {
  }

  valueChange(event: any) {
    console.log(event);
  }

  valueChangePassword(event: any) {
    console.log(event);
  }

  clickButton() {
    this._router.navigateByUrl('/')
  }

  clickButtonAccount() {
    this.generalService.dataUser.isNew = true;
    this._router.navigateByUrl('/')
  }

}
