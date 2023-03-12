import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmDetailDialogComponent } from './alarm-detail-dialog.component';

describe('AlarmDetailDialogComponent', () => {
  let component: AlarmDetailDialogComponent;
  let fixture: ComponentFixture<AlarmDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmDetailDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
