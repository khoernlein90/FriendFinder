var friendData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friendList", function(req, res) {
        res.json(friendData);
    });
};