var friendsData = require("../data/friends");
var difference;


// Your apiRoutes.js file should contain two routes:
module.exports = function (app) {

    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function (req, res) {

        var totalDifference = [];
        for (var k = 0; k < friendsData.length; k++) {

            difference = 0;

            for (var i = 0; i < friendsData[k].scores.length; i++) {
                difference += (Math.abs(req.body.scores[i] - friendsData[k].scores[i]));
            };

            console.log("Difference from " + friendsData[k].name + ": " + difference);

            totalDifference.push(difference);

        };
    
        var smallestDifference = totalDifference.sort(function(a, b){return a-b})[0];

        console.log("Smallest difference: " + smallestDifference);
        

        for (var k = 0; k < friendsData.length; k++) {
            difference = 0;
            for (var i = 0; i < friendsData[k].scores.length; i++) {
                difference += (Math.abs(req.body.scores[i] - friendsData[k].scores[i]));
            };
            if (difference === smallestDifference) {
                console.log("Friend found: " + friendsData[k].photo);
                var friendFound = friendsData[k].name;
                var photoFound = friendsData[k].photo;
                res.json(friendsData[k]);
                
            };
        }

        friendsData.push(req.body);

        

    });
};