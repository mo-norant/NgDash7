import { Dash7NGPage } from './app.po';

describe('dash7-ng App', () => {
  let page: Dash7NGPage;

  beforeEach(() => {
    page = new Dash7NGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
