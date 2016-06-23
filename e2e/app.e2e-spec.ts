import { GiphyTVPage } from './app.po';

describe('giphy-tv App', function() {
  let page: GiphyTVPage;

  beforeEach(() => {
    page = new GiphyTVPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
