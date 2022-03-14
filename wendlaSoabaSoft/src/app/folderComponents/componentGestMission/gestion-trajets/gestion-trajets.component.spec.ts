import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTrajetsComponent } from './gestion-trajets.component';

describe('GestionTrajetsComponent', () => {
  let component: GestionTrajetsComponent;
  let fixture: ComponentFixture<GestionTrajetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionTrajetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionTrajetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
