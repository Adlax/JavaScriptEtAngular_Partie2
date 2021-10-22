import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C15DetailsComponent } from './c15-details.component';

describe('C15DetailsComponent', () => {
  let component: C15DetailsComponent;
  let fixture: ComponentFixture<C15DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C15DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C15DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
