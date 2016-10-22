/*global module, element, protractor, by, browser, expect*/
(function () {
    "use strict";
    
    module.exports = function () {
        
        var EC = protractor.ExpectedConditions;
        
        this.waitUntilAlertIsPresent = function () {
            return browser.wait(EC.alertIsPresent(), 5000);
        };
        
        this.waitElementToClickable = function (element) {
            return browser.wait(EC.elementToBeClickable(element), 5000);
        };
        
        this.waitUntilTextToBePresentInElement = function (string) {
            return browser.wait(EC.textToBePresentInElement(element, string), 5000);
        };
        
        this.waitUntilTextToBePresentInElementValue = function (string) {
            return browser.wait(EC.textToBePresentInElementValue(element, string), 5000);
        };
        
        this.waitUntilTitleToContains = function (string) {
            return browser.wait(EC.titleContains(string), 5000);
        };
        
        this.waitUntilTitleIsEqualsTo = function (string) {
            return browser.wait(EC.titleIs(string), 5000);
        };
        
        this.waitUntilUrlContains = function (string) {
            return browser.wait(EC.urlContains(string), 5000);
        };
        
        this.waitUrlIsEqualsTo = function (string) {
            return browser.wait(EC.urlIs(string), 5000);
        };
        
        this.waitUntilPresenceOfElement = function (element) {
            return browser.wait(EC.presenceOf(element), 5000);
        };
        
        this.waitUntilStalenessOfElement = function (element) {
            return browser.wait(EC.stalenessOf(element), 5000);
        };
        
        this.waitUntilElementToVisible = function (element) {
            return browser.wait(EC.visibilityOf(element), 5000);
        };
        
        this.waitUntilElementToInvisible = function (element) {
            return browser.wait(EC.invisibilityOf(element), 5000);
        };
        
        this.waitUntilElementToBeSelected = function (element) {
            return browser.wait(EC.elementToBeSelected(element), 5000);
        };
    };
}());