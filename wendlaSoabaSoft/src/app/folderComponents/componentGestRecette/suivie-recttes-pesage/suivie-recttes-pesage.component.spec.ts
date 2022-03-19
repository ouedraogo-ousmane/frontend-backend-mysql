import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivieRecttesPesageComponent } from './suivie-recttes-pesage.component';

describe('SuivieRecttesPesageComponent', () => {
  let component: SuivieRecttesPesageComponent;
  let fixture: ComponentFixture<SuivieRecttesPesageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivieRecttesPesageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivieRecttesPesageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
