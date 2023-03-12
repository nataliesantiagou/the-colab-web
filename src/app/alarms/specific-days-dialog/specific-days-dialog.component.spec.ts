import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificDaysDialogComponent } from './specific-days-dialog.component';

describe('SpecificDaysDialogComponent', () => {
  let component: SpecificDaysDialogComponent;
  let fixture: ComponentFixture<SpecificDaysDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificDaysDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificDaysDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
