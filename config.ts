import {Config} from 'protractor';
import {frameworkConfig} from './params';

export let config: Config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'firefox'
    },
    directConnect: true,
    
    specs: ['sample.spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:8000/',
    noGlobals: true,

    onPrepare: () => {
        // Configure JasmineReporter for outputting XML results.
        let JasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new JasmineReporters.JUnitXmlReporter({
            consolidateAll: frameworkConfig.reporter.enableReporter || false, 
            savePath: `${frameworkConfig.rootResultDirectory || 'reports'}/${frameworkConfig.reporter.resultsDirectoryName || 'xmlReports'}`,
            filePrefix:  frameworkConfig.reporter.resultsFileName
        }));
    }
};
