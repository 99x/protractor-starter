/*global describe, expect, require, beforeEach, browser, xit, it, element, by, beforeAll*/

(function () {
    "use strict";

    var ExpectHelperPage = require('../helper/expectHelper.js'),
        expectHelperPage = new ExpectHelperPage(),
        
        elementType,
        elementValue;

    describe('Testing ERP Admin Permissions - Edit Release Notes -- Old', function () {

        beforeAll(function () {
            browser.ignoreSynchronization = true;
            browser.waitForAngular();
        });
        
        it('Testing expectations', function () {
            elementType = 'Id'; //'Name'; //'XPath'; //'ClassName'; //'CssSelector'; //'LinkText';
            
            expectHelperPage.isEnabled(elementValue, elementType).then(function (enabled) {
                expect(enabled).toBe(true, 'Element is not enabled!');
            });
            
            expectHelperPage.isPresent(elementValue, elementType).then(function (present) {
                expect(present).toBe(true, 'Element is not present!');
            });
            
            expectHelperPage.isDisplayed(elementValue, elementType).then(function (displayed) {
                expect(displayed).toBe(true, 'Element is not displayed!');
            });
            
            expectHelperPage.isSelected(elementValue, elementType).then(function (selected) {
                expect(selected).toBe(true, 'Element is not selected!!');
            });
        });
    });
}());
