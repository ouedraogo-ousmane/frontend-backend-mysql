import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChauffeursComponent } from './detail-chauffeurs.component';

describe('DetailChauffeursComponent', () => {
  let component: DetailChauffeursComponent;
  let fixture: ComponentFixture<DetailChauffeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChauffeursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChauffeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
