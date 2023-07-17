exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'pankajsaha_ismjol',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'VVYsDB5CxyrMhooQJWDX',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://54bab74f25beececfb2e5be8bc67619e677c723e',
          buildIdentifier: "${BUILD_NUMBER}",
          browserstackLocal: true
        },
      ]
    ],  
    capabilities: [{
      'bstack:options': {
        deviceName: "iPhone 11 Pro",
        osVersion: "13"
      }
    }, {
      'bstack:options': {
        deviceName: "iPhone 11 Pro Max",
        osVersion: "13"
      }
    }],
  
    commonCapabilities: {
      'bstack:options': {
        projectName: "BrowserStack Samples",
        buildName: 'browserstack build',
        sessionName: 'BStack parallel webdriverio-appium',
        debug: true,
        networkLogs: true,
        source: 'webdriverio:appium-sample-sdk:v1.0'
      }
    },
  
    maxInstances: 10,
  
    updateJob: false,
    specs: [
      '../specs/Testcase-ipa.js'
    ],
    exclude: [],
  
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 40000
    }
  };
  
  // Code to support common capabilities
  exports.config.capabilities.forEach(function(caps){
    for(let key in exports.config.commonCapabilities)
      caps[key] = { ...caps[key], ...exports.config.commonCapabilities[key]};
  });