//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'lib/angular/angular.js',
      'lib/angular-route/angular-route.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      'core/**/*.js',
      'view*/**/*.js'
    ],
	
	reporters: ['progress', 'junit','coverage'],
	
//	preprocessors: {
//    '**/*.js': ['eslint'],
//    '**/*.ts': ['eslint']
//    },
	
    junitReporter: {
      outputDir: '../target/karma-reports/junit', // results will be saved as $outputDir/$browserName.xml
    },
	coverageReporter: {
      type : 'cobertura',
      dir : '../target/karma-reports/coverage/'
    },
	/*eslint: {
        //format: require("eslint-html-reporter"),
        format: require("eslint-junit"),
        outputFile: "eslint.xml",
        outputDir: "../karma-reports"
    },*/

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
	  'karma-html-reporter',
      'karma-junit-reporter',
      'karma-coverage',
      //'karma-eslint',
    ]

  });
};
