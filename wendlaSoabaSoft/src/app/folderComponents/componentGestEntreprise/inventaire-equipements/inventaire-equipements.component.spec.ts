import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireEquipementsComponent } from './inventaire-equipements.component';

describe('InventaireEquipementsComponent', () => {
  let component: InventaireEquipementsComponent;
  let fixture: ComponentFixture<InventaireEquipementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventaireEquipementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventaireEquipementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
