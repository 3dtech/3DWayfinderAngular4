import { WayfinderModulePage } from './app.po';

describe('wayfinder-module App', () => {
  let page: WayfinderModulePage;

  beforeEach(() => {
    page = new WayfinderModulePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
