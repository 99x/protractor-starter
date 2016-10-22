(function () {
    "use strict";

    module.exports = function () {

        var WaitHelper = require('./waitHelper.js'),
            waitHelper = new WaitHelper()

        //To Fill a TextBox    
        this.EnterText = function (txtBox, text) {
            waitHelper.waitUntilElementToVisible(txtBox);
            txtBox.clear();
            txtBox.sendKeys(text);
        };

        //To Clear a Textbox
        this.ClearText = function (textBox) {
            waitHelper.waitUntilElementToVisible(textBox);
            textBox.clear();
        };

        //To Click a Button
        this.ClickButton = function (button) {
            waitHelper.waitUntilElementToVisible(button)
            button.click();
        };

        //To Set Checkbox Value
        this.SetCheckBoxValue = function (checkBox, value) {
            checkBox.isSelected().then(function (selected) {
                if (value && !selected) {
                    checkBox.click();
                }
                else if (!value && selected) {
                    checkBox.click();
                }
            });
        }

        //To Click a Button
        this.FileUpload = function (uploadButton, filePath) {
            uploadButton.sendKeys(filePath);
        };

    };
} ());