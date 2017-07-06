import { BlogToyPage } from './app.po';

describe('blog-toy App', () => {
  let page: BlogToyPage;

  beforeEach(() => {
    page = new BlogToyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
