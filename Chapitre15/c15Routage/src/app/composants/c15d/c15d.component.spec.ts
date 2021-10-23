import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C15dComponent } from './c15d.component';

describe('C15dComponent', () => {
  let component: C15dComponent;
  let fixture: ComponentFixture<C15dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C15dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C15dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
