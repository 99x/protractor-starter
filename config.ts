import {Config} from 'protractor';

export let config: Config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'firefox'
    },
    specs: ['sample.spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    noGlobals: true,
    onPrepare: () => {
        let JasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new JasmineReporters.JUnitXmlReporter({
            consolidateAll: true, 
            savePath: 'results',
            filePrefix: 'xmloutput'
        }));
    }
};