import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeGardeComponent } from './page-de-garde.component';

describe('PageDeGardeComponent', () => {
  let component: PageDeGardeComponent;
  let fixture: ComponentFixture<PageDeGardeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeGardeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeGardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
