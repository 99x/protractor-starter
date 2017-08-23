/*global module, element, protractor, by, browser, expect*/
import { browser, ExpectedConditions, element, protractor, ElementFinder, Ptor, ProtractorExpectedConditions, promise as WebDriverPromise } from 'protractor';
import { Promise } from 'es6-promise';

export class WaitHelper {
    static EC: ProtractorExpectedConditions;

    constructor() {
        WaitHelper.EC = protractor.ExpectedConditions;
    }


    static waitUntilAlertIsPresent(): WebDriverPromise.Promise<any> {
        return browser.wait(this.EC.alertIsPresent(), 5000);
    }

    static waitElementToClickable(element: ElementFinder): WebDriverPromise.Promise<any> {
        return browser.wait(this.EC.elementToBeClickable(element), 5000);
    }

    static waitUntilTextToBePresentInElement(element: ElementFinder, str: string): WebDriverPromise.Promise<any> {
        return browser.wait(this.EC.textToBePresentInElement(element, str), 5000);
    }

    static waitUntilTextToBePresentInElementValue(element: ElementFinder, str: string): WebDriverPromise.Promise<any> {
        return browser.wait(this.EC.textToBePresentInElementValue(element, str), 5000);
    }

    static waitUntilTitleToContains(str: string): WebDriverPromise.Promise<any> {
        return browser.wait(this.EC.titleContains(str), 5000);
    }

    static waitUntilTitleIs(str: string): WebDriverPromise.Promise<any> {
        return browser.wait(this.EC.titleIs(str), 5000);
    }

    static waitUntilUrlContains(str: string): WebDriverPromise.Promise<any> {
        return browser.wait(this.EC.urlContains(str), 5000);
    }

    static waitUrlIsEqualsTo(str: string): WebDriverPromise.Promise<any> {
        return browser.wait(this.EC.urlIs(str), 5000);
    }

    static waitUntilPresenceOfElement(element: ElementFinder): WebDriverPromise.Promise<any> {
        return browser.wait(this.EC.presenceOf(element), 5000);
    }

    static waitUntilStalenessOfElement(element: ElementFinder): WebDriverPromise.Promise<any> {
        return browser.wait(this.EC.stalenessOf(element), 5000);
    }

    static waitUntilElementToVisible(element: ElementFinder): WebDriverPromise.Promise<any> {
        return browser.wait(this.EC.visibilityOf(element), 5000);
    }

    static waitUntilElementToInvisible(element: ElementFinder): WebDriverPromise.Promise<any> {
        return browser.wait(this.EC.invisibilityOf(element), 5000);
    }

    static waitUntilElementToBeSelected(element: ElementFinder): WebDriverPromise.Promise<any> {
        return browser.wait(this.EC.elementToBeSelected(element), 5000);
    }
}
