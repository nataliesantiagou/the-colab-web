import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {

  @Input() selectLabel!: string;
  @Input() selectedValue!: string;
  @Input() options: any = [];
  @Input() keyValue: any;
  @Input() optionValue: any;
  @Output() optionSelected = new EventEmitter();
  isOther = false;

  constructor(
    private generalService: GeneralServiceService
  ) { }

  ngOnInit(): void {
    // this.options.forEach((element: any) => {
    //   if (element.value != this.selectedValue) {
    //     this.isOther = true;
    //     this.generalService.listFrecuencies.push({ value: this.selectedValue, option: this.selectedValue })
    //   } else {
    //     this.isOther = false;
    //   }
    // });
    
  }

  onChange(option: any) {
    this.optionSelected.emit(option);
  }

}
