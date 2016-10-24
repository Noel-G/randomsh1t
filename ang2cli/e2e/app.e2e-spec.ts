import { Ang2cliPage } from './app.po';

describe('ang2cli App', function() {
  let page: Ang2cliPage;

  beforeEach(() => {
    page = new Ang2cliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
