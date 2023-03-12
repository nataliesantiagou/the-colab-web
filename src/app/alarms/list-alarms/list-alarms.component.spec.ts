import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlarmsComponent } from './list-alarms.component';

describe('ListAlarmsComponent', () => {
  let component: ListAlarmsComponent;
  let fixture: ComponentFixture<ListAlarmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAlarmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAlarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
