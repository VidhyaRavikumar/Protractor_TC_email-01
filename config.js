exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
    },
  framework: 'jasmine',
  specs: ['./specs/*'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000
  },
  params: {
    login: {
      email: 'default',
      password: 'default',
      sendtoemail: 'default',
      cmsub: 'test'
    }
  },
};
