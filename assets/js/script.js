var errorMessageEl = document.getElementById("errorMessage");
var button = document.getElementById("submit");

button.addEventListener('click', validateLocation);


// check if input field has value
function validateLocation () {
    event.preventDefault();

    var locationInput = document.getElementById("autocomplete_search").value;
    console.log("location = " + locationInput);

    if (locationInput === "") {
        console.log("empty location");
        // Change class of error message to display.
        document.getElementById("errorMessage").className = "errorMessageShow";
        
     } else {
        console.log("location is not empty");
        // save the location to local storage and redirect to search results page
        localStorage.setItem("location", locationInput);
        redirectSearchResults();
    }
}



function redirectSearchResults () {
    var searchResultsURL = './searchresults.html' + '?location=' + localStorage.getItem("location");
    console.log("redirecting");
    document.location.replace(searchResultsURL);
}

