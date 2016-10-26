export interface FrameworkConfig {
    /**
     * Root directory where all the reports are generated and screen captures are saved.
     * example:
     *          rootResultDirectory: 'reports'
     */    
    rootResultDirectory?: string;

    /**
     * Configuration options for the integrated reporting plugin. Enabled and configure the plugin to 
     * get XML result file at a location specified by configuration values.
     * example:
     *          reporter: {
     *              enableReporter: true,
     *              resultsDirectoryName: 'test-results',
     *              resultsFileName: 'xmlReport'
     *          }
     */
    reporter?: {
        /**
         * Enables or disables the test result reporting feature. Reporting creates a XML file
         * containing the tests that was run and the associated results of thoese tests.
         * example:
         *      enableReporter: true
         */
        enableReporter?: boolean;

        /**
         * Name of the directory in which the XML results file is created if reporter is enabled
         * example:
         *      resultsDirectoryName: 'results'
         */
        resultsDirectoryName?: string;

        /**
         * Name of the file that contains the results of the tests runs. This file is created inside the 
         * directory specified by the resultsDirectoryName.
         * example:
         *      resultsFileName: 'xmlOutput'
         */
        resultsFileName?: string
    };    
}