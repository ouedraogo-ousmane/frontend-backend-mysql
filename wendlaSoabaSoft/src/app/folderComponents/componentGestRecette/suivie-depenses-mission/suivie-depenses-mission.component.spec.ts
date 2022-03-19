import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivieDepensesMissionComponent } from './suivie-depenses-mission.component';

describe('SuivieDepensesMissionComponent', () => {
  let component: SuivieDepensesMissionComponent;
  let fixture: ComponentFixture<SuivieDepensesMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivieDepensesMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivieDepensesMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
