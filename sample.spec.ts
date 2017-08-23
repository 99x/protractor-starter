import {browser, element, by} from 'protractor';

describe('Protractor-TypeScript Starter', () => {
    beforeEach(() => {
        browser.get('http://amasik.com/demo/angularjs/angular-app/');
    });

    it('Should navigate to the demo website',() => {
        expect(browser.getTitle()).toEqual('AngularJS POC');
    });

    it('Should Login to the dashboard page', () => {        
        element(by.buttonText('Sign In')).click();
        expect(browser.getLocationAbsUrl()).toContain('dashboard');
    });

    xit('Should logout from the application', () => {
        //element.all(by.className('dropdown-toggle')).get(1).click();
        //element(by.linkText('Logout')).click();
    });
});
