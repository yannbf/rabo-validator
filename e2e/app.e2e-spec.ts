import { AppPage } from './app.po';

describe('Rabo Validator App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display proper title', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('Rabo validator');
  });
});
