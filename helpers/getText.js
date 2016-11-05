/*global module, element, protractor, by, browser, expect*/
(function () {
    'use strict';
    
    module.exports = function () {
        
        this.byId = function (element, text) {
            expect(element(by.id(element)).getText()).toEqual(text);
        };
        
        this.byLinkText = function (element, text) {
            expect(element(by.linkText(element)).getText()).toEqual(text);
        };
        
        this.byPartialLinkText = function (element, text) {
            expect(element(by.partialLinkText(element)).getText()).toEqual(text);
        };
        
        this.byCss = function (element, text) {
            expect(element(by.css(element)).getText()).toEqual(text);
        };
        
        this.byModel = function (element, text) {
            expect(element(by.model(element)).getText()).toEqual(text);
        };
        
        this.byClassName = function (element, text) {
            expect(element(by.className(element)).getText()).toEqual(text);
        };
        
        this.byCssContainingText = function (element, text) {
            expect(element(by.cssContainingText(element)).getText()).toEqual(text);
        };
        
        this.byName = function (element, text) {
            expect(element(by.name(element)).getText()).toEqual(text);
        };
        
        this.byBinding = function (element, text) {
            expect(element(by.binding(element)).getText()).toEqual(text);
        };
        
        this.byExactBinding = function (element, text) {
            expect(element(by.exactBinding(element)).getText()).toEqual(text);
        };
        
        this.byButtonText = function (element, text) {
            expect(element(by.buttonText(element)).getText()).toEqual(text);
        };
        
        this.byPartialButtonText = function (element, text) {
            expect(element(by.partialButtonText(element)).getText()).toEqual(text);
        };
        
        this.byExactRepeater = function (element, text) {
            expect(element(by.exactRepeater(element)).getText()).toEqual(text);
        };
        
        this.byTagName = function (element, text) {
            expect(element(by.tagName(element)).getText()).toEqual(text);
        };
        
        this.byXpath = function (element, text) {
            expect(element(by.xpath(element)).getText()).toEqual(text);
        };
    };
}());