import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C15rComponent } from './c15r.component';

describe('C15rComponent', () => {
  let component: C15rComponent;
  let fixture: ComponentFixture<C15rComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C15rComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C15rComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
