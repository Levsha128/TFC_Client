import { TFCPage } from './app.po';

describe('tfc App', function() {
  let page: TFCPage;

  beforeEach(() => {
    page = new TFCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
