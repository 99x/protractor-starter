/*global module, require, element, protractor, by, browser, expect*/
(function () {
    'use strict';
    
    module.exports = function () {
        var SwithElementTypesPage = require('../helper/swithElementTypes.js'),
            swithElementTypesPage = new SwithElementTypesPage(),
            
            actualElement;
        
        this.isEnabled = function (elementValue, elementType) {
            actualElement = swithElementTypesPage.getActualElement(elementValue, elementType);
            return actualElement.isEnabled();
        };
        
        this.isPresent = function (elementValue, elementType) {
            actualElement = swithElementTypesPage.getActualElement(elementValue, elementType);
            return actualElement.isPresent();
        };
        
        this.isDisplayed = function (elementValue, elementType) {
            actualElement = swithElementTypesPage.getActualElement(elementValue, elementType);
            return actualElement.isDisplayed();
        };
        
        this.isSelected = function (elementValue, elementType) {
            actualElement = swithElementTypesPage.getActualElement(elementValue, elementType);
            return actualElement.isSelected();
        };
    };
}());