describe('Protractor Element Demo', function(){
	
	var obj = require("./Jsobjectdemo.js");
	var using = require("jasmine-data-provider");
	var d = require("./data.js");
	
	beforeEach(function(){
		obj.getURL();
	});
	
	using(d.Datadriver, function(data, description) {
		it('Testing calculator functionality - ' + description, function(){
			obj.firstinput.sendKeys(data.firstinput);
			obj.secondinput.sendKeys(data.secondinput);
			obj.goButton.click();
			expect(obj.result.getText()).toBe(data.result);
			obj.result.getText().then(function(text){
				console.log(text);
			});
		});
	});
	
	afterEach(function(){
		console.log("Test is completed.");
	});
})