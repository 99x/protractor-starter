/*global module, element, protractor, by, browser, expect*/
(function () {
    'use strict';
    
    module.exports = function () {
        
        this.byId = function (element) {
            expect(element(by.id(element)).isPresent()).toBe(false, 'Element is present!');
        };
        
        this.byLinkText = function (element) {
            expect(element(by.linkText(element)).isPresent()).toBe(false, 'Element is present!');
        };
        
        this.byPartialLinkText = function (element) {
            expect(element(by.partialLinkText(element)).isPresent()).toBe(false, 'Element is present!');
        };
        
        this.byCss = function (element) {
            expect(element(by.css(element)).isPresent()).toBe(false, 'Element is present!');
        };
        
        this.byModel = function (element) {
            expect(element(by.model(element)).isPresent()).toBe(false, 'Element is present!');
        };
        
        this.byClassName = function (element) {
            expect(element(by.className(element)).isPresent()).toBe(false, 'Element is present!');
        };
        
        this.byCssContainingText = function (element, text) {
            expect(element(by.cssContainingText(element, text)).isPresent()).toBe(false, 'Element is present!');
        };
        
        this.byName = function (element) {
            expect(element(by.name(element)).isPresent()).toBe(false, 'Element is present!');
        };
        
        this.byBinding = function (element) {
            expect(element(by.binding(element)).isPresent()).toBe(false, 'Element is present!');
        };
        
        this.byExactBinding = function (element) {
            expect(element(by.exactBinding(element)).isPresent()).toBe(false, 'Element is present!');
        };
        
        this.byButtonText = function (element) {
            expect(element(by.buttonText(element)).isPresent()).toBe(false, 'Element is present!');
        };
        
        this.byPartialButtonText = function (element) {
            expect(element(by.partialButtonText(element)).isPresent()).toBe(false, 'Element is present!');
        };
        
        this.byExactRepeater = function (element) {
            expect(element(by.exactRepeater(element)).isPresent()).toBe(false, 'Element is present!');
        };
        
        this.byTagName = function (element) {
            expect(element(by.tagName(element)).isPresent()).toBe(false, 'Element is present!');
        };
        
        this.byXpath = function (element) {
            expect(element(by.xpath(element)).isPresent()).toBe(false, 'Element is present!');
        };
    };
}());