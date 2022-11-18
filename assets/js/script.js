var button = document.getElementById("submit");
var searchResultsURL = './searchresults.html';
var locationInput = document.getElementById("location").value;
var formEl = document.getElementById("location-form");

button.addEventListener('click', validateLocation);

function getLocationAPI() {
    console.log(locationInput);

    var geoCodeURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + locationInput + '&appid=ef3b94b9a879496a00fc76e964164432';

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


function validateLocation () {
    event.preventDefault();
    var locationInput = document.getElementById("location").value;
    console.log("location = " + locationInput);

    if (locationInput === "") {
        console.log("empty location");
        var emptyLocationEl = document.createElement("div");
        emptyLocationEl.textContent = "Please enter a location";
        formEl.append(emptyLocationEl);
 
    } else {
        console.log("location is not empty");
        redirectSearchResults();
        localStorage.setItem("location", locationInput);
    }

}

function redirectSearchResults () {
    var searchResultsURL = './searchresults.html';
    console.log("redirecting");
    document.location.replace(searchResultsURL);
    // getLocationAPI();
}

   

