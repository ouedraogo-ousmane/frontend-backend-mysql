import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviVehiculesComponent } from './suivi-vehicules.component';

describe('SuiviVehiculesComponent', () => {
  let component: SuiviVehiculesComponent;
  let fixture: ComponentFixture<SuiviVehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviVehiculesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
