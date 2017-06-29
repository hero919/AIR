import { AIRPage } from './app.po';

describe('air App', () => {
  let page: AIRPage;

  beforeEach(() => {
    page = new AIRPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
