var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect:true,
  specs: ['ElementBasics.js'],
  onPrepare :function(){
	  browser.driver.manage().window().maximize();
	  jasmine.getEnv().addReporter(
		  new Jasmine2HtmlReporter({
			  savePath: 'target/screenshots'
	      })
      );
  },
  suites: {
	  Smoke: ['ChainLocators.js', 'Dropdown.js'],
	  Regression: ['ElementBasics.js']
  },
  jasmineNodeOpts: {
	  showColors: true
  }
};