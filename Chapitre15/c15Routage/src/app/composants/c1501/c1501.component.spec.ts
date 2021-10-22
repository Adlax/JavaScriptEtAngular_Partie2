import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1501Component } from './c1501.component';

describe('C1501Component', () => {
  let component: C1501Component;
  let fixture: ComponentFixture<C1501Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1501Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
