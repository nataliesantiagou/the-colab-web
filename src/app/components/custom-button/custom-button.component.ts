import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {

  @Input() inputButton: any;
  @Input() color: any;
  @Output() valueClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickButton() {
    this.valueClick.emit(true);
  }

}
