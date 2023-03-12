import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  @Input() inputText: any;
  @Input() inputLabel: any;
  @Input() isHour: any;
  @Output() valueChange = new EventEmitter();
  @Input() isMedicine: any;

  constructor() { }

  ngOnInit(): void {

  }

  changeText(event: any) {
    this.valueChange.emit(event);
  }

}
