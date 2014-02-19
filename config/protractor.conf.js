exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '../test/EndToEnd/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  //baseUrl: 'http://localhost:8000/app/',
  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};