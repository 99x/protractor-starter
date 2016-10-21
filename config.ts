import {Config} from 'protractor';

export let config: Config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['sample.spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    noGlobals: true
};