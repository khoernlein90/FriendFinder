var friendData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
        console.log(friendData)
    });
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        res.json(newFriend)
        console.log(newFriend)

        for (var i = 0; i < newFriend.scores.length; i++) {
        	parseInt(newFriend.scores[i])
        	console.log(newFriend.scores[i])
        }

        for (var i = 0; i < friendData.length; i++) {
            console.log(friendData[i].scores);
            // var numbers = parseInt(friendData[i].scores)
            var sum = parseInt(friendData[i].scores.reduce(add, 0));
            function add(a, b) {
                return a + b;
            }
            console.log(sum);

        }
        friendData.push(newFriend);

    })

}