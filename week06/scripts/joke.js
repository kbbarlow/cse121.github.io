fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "879a0f6dc9msh2a93d4cf3d0176dp154fd7jsn5faee78b95d1",
		"x-rapidapi-host": "dad-jokes.p.rapidapi.com"
	}
})
	.then((response) => response.json())
	.then((jsObject) =>{
		console.log(jsObject)
		document.getElementById('joke').innerHTML = jsObject.body[0].setup + " " + jsObject.body[0].punchline;
	})
	.catch(err => {
		console.error(err);
	});