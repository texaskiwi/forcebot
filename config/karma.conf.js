module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.10/angular.min.js',
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.10/angular-route.js',
      'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.10/angular-animate.js',
      'test/lib/angular/angular-mocks.js',
      'app/scripts/**/*.js',
      'test/UnitTests/**/*.js'
    ],

    exclude : [
      'app/lib/angular/angular-loader.js',
      'app/lib/angular/*.min.js',
      'app/lib/angular/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}