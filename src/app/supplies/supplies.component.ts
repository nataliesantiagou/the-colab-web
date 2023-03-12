import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.scss']
})
export class SuppliesComponent implements OnInit {

  allData = [
    {patient_name: "Maria Lara", medicine: "Omeprazol", hour: "06:00 a.m.", confirmed: "Si"},
    {patient_name: "Maria Lara", medicine: "Acetaminofen", hour: "06:00 a.m.", confirmed: "Si"},
    {patient_name: "Maria Lara", medicine: "Astorbastatina", hour: "06:00 a.m.", confirmed: "Si"},
  ]
  displayedColumns: string[] = ['patient_name', 'medicine', 'hour', 'confirmed'];
  dataSource = this.allData;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFilter(action: any, event: any) {
    if (action === 'No' && event.checked) {
      this.dataSource = [];
    } else if ((action === 'Si' && event.checked) && (action === 'No' && event.checked)) {
      this.dataSource = this.allData;
    } else {
      this.dataSource = this.allData;
    }
  }

}
