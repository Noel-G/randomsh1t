import { AngbootstrapPage } from './app.po';

describe('angbootstrap App', function() {
  let page: AngbootstrapPage;

  beforeEach(() => {
    page = new AngbootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
