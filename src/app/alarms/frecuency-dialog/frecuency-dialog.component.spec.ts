import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrecuencyDialogComponent } from './frecuency-dialog.component';

describe('FrecuencyDialogComponent', () => {
  let component: FrecuencyDialogComponent;
  let fixture: ComponentFixture<FrecuencyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrecuencyDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrecuencyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
