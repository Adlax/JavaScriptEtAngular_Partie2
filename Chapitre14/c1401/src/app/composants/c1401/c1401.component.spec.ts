import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1401Component } from './c1401.component';

describe('C1401Component', () => {
  let component: C1401Component;
  let fixture: ComponentFixture<C1401Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1401Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
