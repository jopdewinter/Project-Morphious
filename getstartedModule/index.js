var say = require('say');
var JsonDB = require('node-json-db');
var db = new JsonDB("./baseModule/config/userConfig", true, false);
exports.info = function(res) {
	
	say.speak('Lets get started, if you dont understand something you can simply say help me.');
	//Ask what for name the assistant will get
	if (db.getData("/assistantName") == "") {
		say.speak('How do you want to call your personal assisant? If you dont understand.');
		//VARIABLE MISSING 
		if(inputVoiceMISSING == "help me") {
			say.speak('This name will be used to communicate with your assisant.');
		}
	}

	//Ask owner their name
	if (db.getData("/ownerName") == "") {
		say.speak('Hello, I dont know you. May I know your name?');
	}

}