import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDroitRolesComponent } from './gestion-droit-roles.component';

describe('GestionDroitRolesComponent', () => {
  let component: GestionDroitRolesComponent;
  let fixture: ComponentFixture<GestionDroitRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDroitRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDroitRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
