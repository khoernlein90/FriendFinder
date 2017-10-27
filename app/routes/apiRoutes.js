var friendData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        friendData.push(newFriend);

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var newFriendScores = newFriend.scores;
        var difference = 0;

        for (var i = 0; i < (friendData.length - 1); i++) {
            var oldFriend = friendData[i];
            difference = 0;

            for (var j = 0; j < oldFriend.scores.length; j++) {
                var oldFriendScore = oldFriend.scores[j];
                var currentUserScore = newFriendScores[j];

                difference += Math.abs(parseInt(currentUserScore) - parseInt(oldFriendScore));
            }
            if (difference <= bestMatch.friendDifference) {
                bestMatch.name = oldFriend.name;
                bestMatch.photo = oldFriend.photo;
                bestMatch.friendDifference = difference;
            }
        }
        res.json(bestMatch);
    });
}