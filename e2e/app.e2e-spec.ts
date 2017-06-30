import { RgrxCrudPage } from './app.po';

describe('rgrx-crud App', () => {
  let page: RgrxCrudPage;

  beforeEach(() => {
    page = new RgrxCrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
