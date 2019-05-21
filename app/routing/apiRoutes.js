var friendsData = require("../data/friends");


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

            var difference = 0;

            for (var i = 0; i < friendsData[k].scores.length; i++) {
                difference += (Math.abs(req.body.scores[i] - friendsData[k].scores[i]));

            };

            console.log(difference);
            totalDifference.push(difference);


        };
        console.log(totalDifference);

        friendsData.push(req.body);
        res.json(true);





    });
};