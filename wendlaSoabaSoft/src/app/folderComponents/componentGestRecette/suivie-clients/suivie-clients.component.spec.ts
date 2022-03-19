import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivieClientsComponent } from './suivie-clients.component';

describe('SuivieClientsComponent', () => {
  let component: SuivieClientsComponent;
  let fixture: ComponentFixture<SuivieClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivieClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivieClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
