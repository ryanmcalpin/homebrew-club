import { HomebrewClubPage } from './app.po';

describe('homebrew-club App', () => {
  let page: HomebrewClubPage;

  beforeEach(() => {
    page = new HomebrewClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
