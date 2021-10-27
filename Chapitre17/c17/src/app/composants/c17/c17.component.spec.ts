import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { C17Component } from './c17.component';
import { C17Service } from 'src/app/services/c17.service';

describe('C17Component', () => {
  let component: C17Component;
  let fixture: ComponentFixture<C17Component>;
  let debugElement: DebugElement;
  let service: C17Service;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
    service = TestBed.get(C17Service);
    spyOn(service,'uneMethodeDuService').and.returnValue("Faux Service, fausse methode");
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('doit renvoyer le bon texte dans le paragraphe', () => {
    const parTag = debugElement.nativeElement.querySelector('p');
    expect(parTag.textContent).toEqual('c17 works!');
  });

  fit('doit renvoyer le bon texte dans le span avec id', () => {
    const parId = debugElement.nativeElement.querySelector('#monSpan');
    expect(parId.textContent).toEqual('Span0');
  });

  fit('doit renvoyer le bon texte dans le paragraphe avec class', () => {
    const parCss = debugElement.nativeElement.querySelector('.maClasse');
    expect(parCss.textContent).toEqual('Span1');
  });

  fit('doit appleler le service', () => {
    expect(component.surClick()).toBe('Faux Service, fausse methode');
    expect(service.uneMethodeDuService).toHaveBeenCalled();
    expect(service.uneMethodeDuService).toHaveBeenCalledTimes(1);
  });

});
