var button = document.getElementById("submit");
button.addEventListener('click', getLocationAPI);

function getLocationAPI() {
    
    var location = document.getElementById("location").value;
    console.log(location);
    var geoCodeURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + location + '&appid=ef3b94b9a879496a00fc76e964164432';

    fetch(geoCodeURL).then(function (response) {
        if (response.ok) {
            console.log("Sucess!");
            response.json().then(function (data) {
                console.log(data);
                getWeatherAPI(data[0].lat, data[0].lon);
            });
        } else {
            alert('Error: ' + response.statusText);
        }
    })


}



