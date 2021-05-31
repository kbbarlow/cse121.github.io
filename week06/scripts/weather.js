const APIurl = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.3928&lon=-111.7941&appid=f59f532633b10d55bbf07be7f8538bff&units=imperial'

fetch(APIurl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject)
    const descipt = jsObject.current.weather[0].description;
    const image = 'https://openweathermap.org/img/wn/' + jsObject.current.weather[0].icon + '@2x.png';
    document.getElementById('icon').setAttribute('alt', descipt);
    document.getElementById('icon').setAttribute('src', image);
    document.getElementById('weather').innerHTML = jsObject.current.weather[0].description;
    document.getElementById('current-temp').innerHTML = Math.round(jsObject.current.temp) + "&#8457;";
    document.getElementById('feels_like').innerHTML = Math.round(jsObject.current.feels_like) + "&#8457;";
    document.getElementById('humidity').innerHTML = Math.round(jsObject.current.humidity) + "&#37;";
  });

