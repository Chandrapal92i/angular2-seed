import { CodeChallengePage } from './app.po';

describe('code-challenge App', () => {
  let page: CodeChallengePage;

  beforeEach(() => {
    page = new CodeChallengePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
