import { BindingTestPage } from './app.po';

describe('binding-test App', function() {
  let page: BindingTestPage;

  beforeEach(() => {
    page = new BindingTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
