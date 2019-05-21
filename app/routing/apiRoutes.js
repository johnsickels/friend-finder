var friendsData = require("../data/friends");

// Your apiRoutes.js file should contain two routes:
module.exports = function(app) {

    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
        res.json(true);
        console.log("app.post in apiroutes");
        
        console.log(req.body);
        console.log(res.body);
        console.log(friendsData);
        
    });
};