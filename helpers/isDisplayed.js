/*global module, element, protractor, by, browser, expect*/
(function () {
    'use strict';
    
    module.exports = function () {
        
        this.byId = function (element) {
            expect(element(by.id(element)).isDisplayed()).toBe(true, 'Element is not displayed!');
        };
        
        this.byLinkText = function (element) {
            expect(element(by.linkText(element)).isDisplayed()).toBe(true, 'Element is not displayed!');
        };
        
        this.byPartialLinkText = function (element) {
            expect(element(by.partialLinkText(element)).isDisplayed()).toBe(true, 'Element is not displayed!');
        };
        
        this.byCss = function (element) {
            expect(element(by.css(element)).isDisplayed()).toBe(true, 'Element is not displayed');
        };
        
        this.byModel = function (element) {
            expect(element(by.model(element)).isDisplayed()).toBe(true, 'Element is not displayed');
        };
        
        this.byClassName = function (element) {
            expect(element(by.className(element)).isDisplayed()).toBe(true, 'Element is not displayed');
        };
        
        this.byCssContainingText = function (element, text) {
            expect(element(by.cssContainingText(element, text)).isDisplayed()).toBe(true, 'Element is not displayed');
        };
        
        this.byName = function (element) {
            expect(element(by.name(element)).isDisplayed()).toBe(true, 'Element is not displayed');
        };
        
        this.byBinding = function (element) {
            expect(element(by.binding(element)).isDisplayed()).toBe(true, 'Element is not displayed');
        };
        
        this.byExactBinding = function (element) {
            expect(element(by.exactBinding(element)).isDisplayed()).toBe(true, 'Element is not displayed');
        };
        
        this.byButtonText = function (element) {
            expect(element(by.buttonText(element)).isDisplayed()).toBe(true, 'Element is not displayed');
        };
        
        this.byPartialButtonText = function (element) {
            expect(element(by.partialButtonText(element)).isDisplayed()).toBe(true, 'Element is not displayed');
        };
        
        this.byExactRepeater = function (element) {
            expect(element(by.exactRepeater(element)).isDisplayed()).toBe(true, 'Element is not displayed');
        };
        
        this.byTagName = function (element) {
            expect(element(by.tagName(element)).isDisplayed()).toBe(true, 'Element is not displayed');
        };
        
        this.byXpath = function (element) {
            expect(element(by.xpath(element)).isDisplayed()).toBe(true, 'Element is not displayed');
        };
    };
}());