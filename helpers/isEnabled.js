/*global module, element, protractor, by, browser, expect*/
(function () {
    'use strict';
    
    module.exports = function () {
        
        this.byId = function (element) {
            expect(element(by.id(element)).isEnabled()).toBe(true, 'Element is not enabled!');
        };
        
        this.byLinkText = function (element) {
            expect(element(by.linkText(element)).isEnabled()).toBe(true, 'Element is not enabled!');
        };
        
        this.byPartialLinkText = function (element) {
            expect(element(by.partialLinkText(element)).isEnabled()).toBe(true, 'Element is not enabled!');
        };
        
        this.byCss = function (element) {
            expect(element(by.css(element)).isEnabled()).toBe(true, 'Element is not enabled!');
        };
        
        this.byModel = function (element) {
            expect(element(by.model(element)).isEnabled()).toBe(true, 'Element is not enabled!');
        };
        
        this.byClassName = function (element) {
            expect(element(by.className(element)).isEnabled()).toBe(true, 'Element is not enabled!');
        };
        
        this.byCssContainingText = function (element, text) {
            expect(element(by.cssContainingText(element, text)).isEnabled()).toBe(true, 'Element is not enabled!');
        };
        
        this.byName = function (element) {
            expect(element(by.name(element)).isEnabled()).toBe(true, 'Element is not enabled!');
        };
        
        this.byBinding = function (element) {
            expect(element(by.binding(element)).isEnabled()).toBe(true, 'Element is not enabled!');
        };
        
        this.byExactBinding = function (element) {
            expect(element(by.exactBinding(element)).isEnabled()).toBe(true, 'Element is not enabled!');
        };
        
        this.byButtonText = function (element) {
            expect(element(by.buttonText(element)).isEnabled()).toBe(true, 'Element is not enabled!');
        };
        
        this.byPartialButtonText = function (element) {
            expect(element(by.partialButtonText(element)).isEnabled()).toBe(true, 'Element is not enabled!');
        };
        
        this.byExactRepeater = function (element) {
            expect(element(by.exactRepeater(element)).isEnabled()).toBe(true, 'Element is not enabled!');
        };
        
        this.byTagName = function (element) {
            expect(element(by.tagName(element)).isEnabled()).toBe(true, 'Element is not enabled!');
        };
        
        this.byXpath = function (element) {
            expect(element(by.xpath(element)).isEnabled()).toBe(true, 'Element is not enabled!');
        };
    };
}());