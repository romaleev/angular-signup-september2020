import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  async setInput(name: string, value: string): Promise<void> {
    await element.all(by.id(name)).sendKeys(value);
  }

  async click(name: string): Promise<void> {
    await element.all(by.id(name)).click();
  }

  async getAlert(name: string): Promise<string> {
    const present = await element(by.id(name)).isPresent();
    if (!present){
      return '';
    }
    return element(by.id(name)).getText();
  }
}
