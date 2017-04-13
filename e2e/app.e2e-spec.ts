import { GbgtechweekClientPage } from './app.po';

describe('gbgtechweek-client App', () => {
  let page: GbgtechweekClientPage;

  beforeEach(() => {
    page = new GbgtechweekClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
