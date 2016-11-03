/*global module, element, protractor, by, browser, expect*/
(function () {
    'use strict';
    
    module.exports = function () {
        
        this.byId = function (element) {
            expect(element(by.id(element)).isSelected()).toBe(false, 'Element is selected!');
        };
        
        this.byCss = function (element) {
            expect(element(by.css(element)).isSelected()).toBe(false, 'Element is selected!');
        };
        
        this.byModel = function (element) {
            expect(element(by.model(element)).isSelected()).toBe(false, 'Element is selected!');
        };
        
        this.byClassName = function (element) {
            expect(element(by.className(element)).isSelected()).toBe(false, 'Element is selected!');
        };
        
        this.byCssContainingText = function (element, text) {
            expect(element(by.cssContainingText(element, text)).isSelected()).toBe(false, 'Element is selected!');
        };
        
        this.byName = function (element) {
            expect(element(by.name(element)).isSelected()).toBe(false, 'Element is selected!');
        };
        
        this.byBinding = function (element) {
            expect(element(by.binding(element)).isSelected()).toBe(false, 'Element is selected!');
        };
        
        this.byExactBinding = function (element) {
            expect(element(by.exactBinding(element)).isSelected()).toBe(false, 'Element is selected!');
        };
        
        this.byButtonText = function (element) {
            expect(element(by.buttonText(element)).isSelected()).toBe(false, 'Element is selected!');
        };
        
        this.byPartialButtonText = function (element) {
            expect(element(by.partialButtonText(element)).isSelected()).toBe(false, 'Element is selected!');
        };
        
        this.byExactRepeater = function (element) {
            expect(element(by.exactRepeater(element)).isSelected()).toBe(false, 'Element is selected!');
        };
        
        this.byTagName = function (element) {
            expect(element(by.tagName(element)).isSelected()).toBe(false, 'Element is selected!');
        };
        
        this.byXpath = function (element) {
            expect(element(by.xpath(element)).isSelected()).toBe(false, 'Element is selected!');
        };
    };
}());