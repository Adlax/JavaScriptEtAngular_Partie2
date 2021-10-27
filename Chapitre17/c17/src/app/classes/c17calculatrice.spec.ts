import { C17calculatrice } from './c17calculatrice';
//import { ComponentFixture } from '@angular/core/testing';

describe('C17calculatrice', () => {
  let c17calc: C17calculatrice;
  // beforeEach( ()=> {
  //   const c17calc = new C17calculatrice();
  // });
  fit('should create an instance', () => {
    const c17calc: C17calculatrice = new C17calculatrice();
    expect(new C17calculatrice()).toBeTruthy();
  });
  fit('Doit additioner correctement deux nombres', () => {
    const c17calc: C17calculatrice = new C17calculatrice();
    expect(c17calc.addition(2,3)).toEqual(5);
  });
  fit('Doit soustraire correctement deux nombres', () => {
    const c17calc: C17calculatrice = new C17calculatrice();
    expect(c17calc.soustraction(2,1)).toEqual(1);
  });
  fit('Doit multiplier correctement deux nombres', () => {
    const c17calc: C17calculatrice = new C17calculatrice();
    expect(c17calc.multiplication(2,3)).toEqual(6);
  });
  fit('Doit diviser correctement deux nombres', () => {
    const c17calc: C17calculatrice = new C17calculatrice();
    expect(c17calc.division(20,10)).toEqual(2);
  });
});
