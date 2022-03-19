import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivieRecettesSansPesageComponent } from './suivie-recettes-sans-pesage.component';

describe('SuivieRecettesSansPesageComponent', () => {
  let component: SuivieRecettesSansPesageComponent;
  let fixture: ComponentFixture<SuivieRecettesSansPesageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivieRecettesSansPesageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivieRecettesSansPesageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
