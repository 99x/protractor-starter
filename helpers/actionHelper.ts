import { ElementFinder } from 'protractor';
import { WaitHelper } from './waitHelper';


export class ActionHelper {
    constructor() {
    }

    EnterText(txtBox: ElementFinder, text: string) {
        WaitHelper.waitUntilElementToVisible(txtBox);
        txtBox.clear();
        txtBox.sendKeys(text);
    }

    //To Clear a Textbox
    ClearText(textBox: ElementFinder) {
        WaitHelper.waitUntilElementToVisible(textBox);
        textBox.clear();
    }

    //To Click a Button
    ClickButton(button: ElementFinder) {
        WaitHelper.waitUntilElementToVisible(button)
        button.click();
    }

    //To Set Checkbox Value
    SetCheckBoxValue(checkBox: ElementFinder, setCheckbox: boolean) {
        checkBox.isSelected().then(function (selected) {
            if (setCheckbox && !selected) {
                checkBox.click();
            }
            else if (!setCheckbox && selected) {
                checkBox.click();
            }
        });
    }

    //To Click a Button
    FileUpload(uploadButton: ElementFinder, filePath: string) {
        uploadButton.sendKeys(filePath);
    }
}
