import { NgCliAotPage } from './app.po';

describe('ng-cli-aot App', function() {
  let page: NgCliAotPage;

  beforeEach(() => {
    page = new NgCliAotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
