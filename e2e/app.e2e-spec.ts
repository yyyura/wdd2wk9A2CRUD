import { Wk9A2CRUDPage } from './app.po';

describe('wk9-a2-crud App', function() {
  let page: Wk9A2CRUDPage;

  beforeEach(() => {
    page = new Wk9A2CRUDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
