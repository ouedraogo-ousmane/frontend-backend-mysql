import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammationComponent } from './programmation.component';

describe('ProgrammattionComponent', () => {
  let component: ProgrammationComponent;
  let fixture: ComponentFixture<ProgrammationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
