import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  valueChange(event: any) {
    console.log(event);
  }

  clickButton() {
    this._router.navigateByUrl('/')
  }
}
