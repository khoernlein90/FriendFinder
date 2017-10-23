var path = require("path");

module.exports = function (app) {
	app.get("/survey", function(res, req){
		console.log(__dirname);
	})
}