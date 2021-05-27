var unirest = require("unirest");

var req = unirest("GET", "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search");

req.query({
	"query": "<REQUIRED>"
});

req.headers({
	"accept": "application/json",
	"x-rapidapi-key": "879a0f6dc9msh2a93d4cf3d0176dp154fd7jsn5faee78b95d1",
	"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});