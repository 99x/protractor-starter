/*global module, element, protractor, by, browser, expect*/
(function () {
    'use strict';
    
    module.exports = function () {
        
        this.byId = function (element) {
            expect(element(by.id(element)).isSelected()).toBe(true, 'Element is available!');
        };
        
        this.byCss = function (element) {
            expect(element(by.css(element)).isSelected()).toBe(true, 'Element is available!');
        };
        
        this.byModel = function (element) {
            expect(element(by.model(element)).isSelected()).toBe(true, 'Element is available!');
        };
        
        this.byClassName = function (element) {
            expect(element(by.className(element)).isSelected()).toBe(true, 'Element is available!');
        };
        
        this.byCssContainingText = function (element, text) {
            expect(element(by.cssContainingText(element, text)).isSelected()).toBe(true, 'Element is available!');
        };
        
        this.byName = function (element) {
            expect(element(by.name(element)).isSelected()).toBe(true, 'Element is available!');
        };
        
        this.byBinding = function (element) {
            expect(element(by.binding(element)).isSelected()).toBe(true, 'Element is available!');
        };
        
        this.byExactBinding = function (element) {
            expect(element(by.exactBinding(element)).isSelected()).toBe(true, 'Element is available!');
        };
        
        this.byButtonText = function (element) {
            expect(element(by.buttonText(element)).isSelected()).toBe(true, 'Element is available!');
        };
        
        this.byPartialButtonText = function (element) {
            expect(element(by.partialButtonText(element)).isSelected()).toBe(true, 'Element is available!');
        };
        
        this.byExactRepeater = function (element) {
            expect(element(by.exactRepeater(element)).isSelected()).toBe(true, 'Element is available!');
        };
        
        this.byTagName = function (element) {
            expect(element(by.tagName(element)).isSelected()).toBe(true, 'Element is available!');
        };
        
        this.byXpath = function (element) {
            expect(element(by.xpath(element)).isSelected()).toBe(true, 'Element is available!');
        };
    };
}());