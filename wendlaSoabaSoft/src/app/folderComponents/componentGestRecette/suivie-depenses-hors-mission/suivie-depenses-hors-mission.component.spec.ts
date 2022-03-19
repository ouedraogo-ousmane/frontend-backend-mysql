import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivieDepensesHorsMissionComponent } from './suivie-depenses-hors-mission.component';

describe('SuivieDepensesHorsMissionComponent', () => {
  let component: SuivieDepensesHorsMissionComponent;
  let fixture: ComponentFixture<SuivieDepensesHorsMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivieDepensesHorsMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivieDepensesHorsMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
