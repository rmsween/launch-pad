import { LaunchPadPage } from './app.po';

describe('launch-pad App', () => {
  let page: LaunchPadPage;

  beforeEach(() => {
    page = new LaunchPadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
