import { AppPage } from './app.po';

describe('App', () => {

  let page: AppPage;

  beforeEach( () => {
    page = new AppPage();
    page.navigateTo();
  });

  it('Doit trouver trois elements au depart', () => {
    expect(page.getListeParSonId().count()).toBe(3);
  });

  it('Doit avoir 4 elements apres un ajout valide', () => {
    const champPrenom = page.getInputParSonId();
    const bouton = page.getBouttonParSonId();
    champPrenom.sendKeys('TataBinch');
    bouton.click();
    expect(page.getListeParSonId().count()).toBe(4);
  });

  it('Ne doit pas ajouter un element deja present dans la liste', () => {
    const champPrenom = page.getInputParSonId();
    const bouton = page.getBouttonParSonId();
    champPrenom.sendKeys('yoda');
    bouton.click();
    expect(page.getListeParSonId().count()).toBe(3);
  });

  it('Ne doit pas ajouter le vide dans la liste', () => {
    const champPrenom = page.getInputParSonId();
    const bouton = page.getBouttonParSonId();
    champPrenom.sendKeys('');
    bouton.click();
    expect(page.getListeParSonId().count()).toBe(3);
  });

});
