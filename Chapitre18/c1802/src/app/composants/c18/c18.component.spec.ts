import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C18Component } from './c18.component';

describe('C18Component', () => {
  let component: C18Component;
  let fixture: ComponentFixture<C18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
