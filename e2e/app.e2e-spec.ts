import { CodeCrawlPage } from './app.po';

describe('code-crawl App', function() {
  let page: CodeCrawlPage;

  beforeEach(() => {
    page = new CodeCrawlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cc works!');
  });
});
