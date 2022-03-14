import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivieProduitsComponent } from './suivie-produits.component';

describe('SuivieProduitsComponent', () => {
  let component: SuivieProduitsComponent;
  let fixture: ComponentFixture<SuivieProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivieProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivieProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
