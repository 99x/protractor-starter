/*global module, element, protractor, by, browser, expect*/
(function () {
    'use strict';
    
    module.exports = function () {
        
        var actualElement;
        
        this.getActualElement = function (elementValue, elementType) {
            
            switch (elementType) {
                case 'Id':
                    actualElement = element(by.id(elementValue));
                    break;
                case 'Name':
                    actualElement = element(by.name(elementValue));
                    break;
                case 'XPath':
                    actualElement = element(by.xpath(elementValue));
                    break;
                case 'ClassName':
                    actualElement = element(by.className(elementValue));
                    break;
                case 'CssSelector':
                    actualElement = element(by.css(elementValue));
                    break;
                case 'LinkText':
                    actualElement = element(by.linkText(elementValue));
                    break;
            }
            
            return actualElement;
        };
    };
})();