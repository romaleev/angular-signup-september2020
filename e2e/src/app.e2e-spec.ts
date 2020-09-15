import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project angular-signup-september2020', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should submit correctly', () => {
    page.navigateTo();

    page.setInput('firstName', 'First');
    page.setInput('lastName', 'Last');
    page.setInput('email', 'my@email.com');
    page.setInput('password', 'asdffdsA');

    page.click('register');

    expect(page.getAlert('success')).toEqual('Registered successfully');
  });

  it('should not submit if incorrect', () => {
    page.navigateTo();

    page.setInput('lastName', 'Last');
    page.setInput('email', 'my@email.com');
    page.setInput('password', 'asdffdsA');

    page.click('register');

    expect(page.getAlert('success')).toBeFalsy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
