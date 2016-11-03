/*global module, element, protractor, by, browser, expect*/
(function () {
    'use strict';
    
    module.exports = function () {
        
        this.byId = function (element) {
            expect(element(by.id(element)).isPresent()).toBe(true, 'Element is not present!');
        };
        
        this.byLinkText = function (element) {
            expect(element(by.linkText(element)).isPresent()).toBe(true, 'Element is not present!');
        };
        
        this.byPartialLinkText = function (element) {
            expect(element(by.partialLinkText(element)).isPresent()).toBe(true, 'Element is not present!');
        };
        
        this.byCss = function (element) {
            expect(element(by.css(element)).isPresent()).toBe(true, 'Element is not present!');
        };
        
        this.byModel = function (element) {
            expect(element(by.model(element)).isPresent()).toBe(true, 'Element is not present!');
        };
        
        this.byClassName = function (element) {
            expect(element(by.className(element)).isPresent()).toBe(true, 'Element is not present!');
        };
        
        this.byCssContainingText = function (element, text) {
            expect(element(by.cssContainingText(element, text)).isPresent()).toBe(true, 'Element is not present!');
        };
        
        this.byName = function (element) {
            expect(element(by.name(element)).isPresent()).toBe(true, 'Element is not present!');
        };
        
        this.byBinding = function (element) {
            expect(element(by.binding(element)).isPresent()).toBe(true, 'Element is not present!');
        };
        
        this.byExactBinding = function (element) {
            expect(element(by.exactBinding(element)).isPresent()).toBe(true, 'Element is not present!');
        };
        
        this.byButtonText = function (element) {
            expect(element(by.buttonText(element)).isPresent()).toBe(true, 'Element is not present!');
        };
        
        this.byPartialButtonText = function (element) {
            expect(element(by.partialButtonText(element)).isPresent()).toBe(true, 'Element is not present!');
        };
        
        this.byExactRepeater = function (element) {
            expect(element(by.exactRepeater(element)).isPresent()).toBe(true, 'Element is not present!');
        };
        
        this.byTagName = function (element) {
            expect(element(by.tagName(element)).isPresent()).toBe(true, 'Element is not present!');
        };
        
        this.byXpath = function (element) {
            expect(element(by.xpath(element)).isPresent()).toBe(true, 'Element is not present!');
        };
    };
}());