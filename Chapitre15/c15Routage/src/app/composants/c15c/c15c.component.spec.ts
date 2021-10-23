import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C15cComponent } from './c15c.component';

describe('C15cComponent', () => {
  let component: C15cComponent;
  let fixture: ComponentFixture<C15cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C15cComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C15cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
