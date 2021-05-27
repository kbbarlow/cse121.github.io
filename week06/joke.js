var unirest = require("unirest");

var req = unirest("GET", "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random");

req.headers({
	"accept": "application/json",
	"x-rapidapi-key": "SIGN-UP-FOR-KEY",
	"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});