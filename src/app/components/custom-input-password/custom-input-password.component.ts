import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input-password',
  templateUrl: './custom-input-password.component.html',
  styleUrls: ['./custom-input-password.component.scss']
})
export class CustomInputPasswordComponent implements OnInit {

  @Input() inputText: any;
  @Input() inputLabel: any;
  @Output() valueChange = new EventEmitter();
  showPassword: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  changeText(event: any) {
    this.valueChange.emit(event);
  }
}
