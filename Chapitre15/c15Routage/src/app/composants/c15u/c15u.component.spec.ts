import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C15uComponent } from './c15u.component';

describe('C15uComponent', () => {
  let component: C15uComponent;
  let fixture: ComponentFixture<C15uComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C15uComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C15uComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
