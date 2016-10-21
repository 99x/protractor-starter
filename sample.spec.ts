import {browser, element, by, By} from 'protractor';

describe('Protractor-TypeScript Starter', () => {
    it('Should navigate to the demo website', () => {
        browser.get('http://amasik.com/demo/angularjs/angular-app/');

        element(by.buttonText('Sign In')).click();
    });
});
