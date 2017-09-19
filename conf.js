exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
  'browserName': 'chrome',
  'chromeOptions': {
    'args': ['--disable-web-security', '--user-data-dir=~/.e2e-chrome-profile']
  }
},
 baseUrl: 'http://localhost:8888/',
  specs: ['protractor.e2e-test.js']
};