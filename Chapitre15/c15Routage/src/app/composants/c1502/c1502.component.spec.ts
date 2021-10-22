import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1502Component } from './c1502.component';

describe('C1502Component', () => {
  let component: C1502Component;
  let fixture: ComponentFixture<C1502Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1502Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
