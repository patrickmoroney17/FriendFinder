const controlData = require('../data/friends.js');


module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(controlData);
	});

	app.post('/api/friends', function(req, res){
		var closestMatch = 25;
		var sameTotal = 0;

		for (i = 0; i < controlData.length; i++) {
			console.log("Comparing with " + controlData[i].name);

			var runningTotal = 0;

			for (var j = 0; j < 10; j++){
				runningTotal = runningTotal + Math.abs(controlData[i].scores[j] - req.body.scores[j]);
			}
			if (runningTotal < closestMatch){
				closestMatch = runningTotal
				sameTotal = i;
			}
      	console.log("Total difference: " + controlData[i].name + " is " + runningTotal);
		}

		console.log("-----------------------------");
		console.log("best person is " + controlData[sameTotal].name + " and best score is " + closestMatch);
		console.log("-----------------------------");

		// push in the latest victim into the friendArray
		controlData.push(req.body);

    	// respond back with the closest match
		res.json({name: controlData[sameTotal].name, photo: controlData[sameTotal].photo});
    	// res.json(true);
	});
}