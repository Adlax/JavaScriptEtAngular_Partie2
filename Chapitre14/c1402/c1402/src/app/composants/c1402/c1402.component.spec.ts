import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1402Component } from './c1402.component';

describe('C1402Component', () => {
  let component: C1402Component;
  let fixture: ComponentFixture<C1402Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1402Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
