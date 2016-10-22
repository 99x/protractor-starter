import {FrameworkConfig} from './typings/frameworkConfig';

export let frameworkConfig: FrameworkConfig = {    
    rootResultDirectory: 'reports',
    reporter: {
        enableReporter: true,
        resultsDirectoryName: 'results',
        resultsFileName: 'xmlTestOutput'
    }
};