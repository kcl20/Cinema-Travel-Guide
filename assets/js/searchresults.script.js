//I'm stuck again with getting the variable over. Since we run the "getMovies" function
//on js1, it'll also need to run here as well, but then the variable gets refreshed.
//I don't mind trying again later tomorrow, but if you end up figuring it all out before me
// I can be online to fix up the elements when it's working. Thanks!

//fetch data about the top 3 movies
function getMovies(locationInput) {
    event.preventDefault();
    var locationInput = document.getElementById("location").value;
    // localStorage.setItem('location', locationInput)
    // console.log(locationInputRecall)
    redirectSearchResults(locationInput);
}
    var requestMovieUrl = "http://www.omdbapi.com/?s=" + locationInput + "&apikey=dacedb99"  
        console.log(requestMovieUrl)
        console.log(movieEl1)
  
    fetch(requestMovieUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            console.log(data)
    
    //Movie 1
    var movieEl1 = document.getElementById("movie-1")
//I am commenting out adding one of the elements, since I inputted a <p> tag so that the words appear in the correct spot. I do that for the first one, and then for the second I append a newly created paragraph
        // var movie1title = document.createElement("p");
        var movie1year = document.createElement("p"); 

        // movieEl1.append(movie1title)
        movieEl1.textContent = data.Search[0].Title

        movieEl1.append(movie1year)
        movie1year.textContent = data.Search[0].Year

    // Movie 2
    var movieEl2 = document.getElementById("movie_2")
            // var movie2title = document.createElement("p");
            var movie2year = document.createElement("p");
        
            // movieEl2.append(movie2title)
            movieEl2.textContent = data.Search[1].Title

            movieEl2.append(movie2year)
            movie2year.textContent = data.Search[1].Year
        
    // Movie 3
    var movieEl3 = document.getElementById("movie_3")
            // var movie3title = document.createElement("p");
            var movie3year = document.createElement("p");
        
            // movieEl3.append(movie3title)
           movieEl3.textContent = data.Search[2].Title

            movieEl3.append(movie3year)
            movie3year.textContent = data.Search[2].Year
          
            getIMDB()
})

function getIMDB() {
var locationInput = document.getElementById("location").value;
var requestImdbUrl = "http://www.omdbapi.com/?s=" + locationInput + "&apikey=dacedb99"
fetch(requestImdbUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            console.log(data)


// The additional Elements may need to be check over/tweaked. I don't want to do changes that may not work, without seeing the final product.
var movie1imdbID = data.Search[0].imdbID
console.log(movie1imdbID)
var movie2imdbID = data.Search[1].imdbID
console.log(movie2imdbID)
var movie3imdbID = data.Search[2].imdbID
console.log(movie3imdbID)

    var movie1imdbURL = "http://www.omdbapi.com/?i=" + movie1imdbID + "&apikey=dacedb99"
    
    fetch(movie1imdbURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
            console.log(data)
    
    var movie1imdbLink = (href = ("https://www.imdb.com/title/" + movie1imdbID));
    var movie1imdbLocation = data.Country;
    var movie1imdbRating = data.imdbRating;

    // console.log(movie1imdbLocation)
    // console.log(movie1imdbRating)

    var modalEl1 = document.getElementById("modal-description-movie1")

    var movie1ModalLink = document.getElementById("movie-link")
        movie1ModalLink.href = movie1imdbLink

    var movie1ModalLocation = document.createElement("p");
        modalEl1.append(movie1ModalLocation)
        movie1ModalLocation.textContent = movie1imdbLocation
    
    var movie1ModalRating = document.createElement("p");
        modalEl1.append(movie1ModalRating)
        movie1ModalRating.textContent = movie1imdbRating
    })}
    
    var movie2imdbURL = "http://www.omdbapi.com/?i=" + movie2imdbID + "&apikey=dacedb99"
    
    fetch(movie2imdbURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
            console.log(data)

    //Movie 2 Description
        var movie2imdbLink = (href = ("https://www.imdb.com/title/" + movie2imdbID));
        var movie2imdbLocation = data.Country;
        var movie2imdbRating = data.imdbRating;
    
        // console.log(movie2imdbLocation)
        // console.log(movie2imdbRating)
       
        var modalEl2 = document.getElementById("modal-description-movie2")
       
        var movie2ModalLink = document.getElementById("movie-link2")
            movie2ModalLink.href = movie2imdbLink
    
        var movie2ModalLocation = document.createElement("p");
            modalEl2.append(movie2ModalLocation)
            movie2ModalLocation.textContent = movie2imdbLocation
        
        var movie2ModalRating = document.createElement("p");
            modalEl2.append(movie2ModalRating)
            movie2ModalRating.textContent = movie2imdbRating
    
    })}

    var movie3imdbURL = "http://www.omdbapi.com/?i=" + movie3imdbID + "&apikey=dacedb99"
    
    fetch(movie3imdbURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
            console.log(data)

    // Movie 3 Description
    var movie3imdbLink = (href = ("https://www.imdb.com/title/" + movie3imdbID));
    var movie3imdbLocation = data.Country;
    var movie3imdbRating = data.imdbRating;

    console.log(movie3imdbLocation)
    console.log(movie3imdbRating)

    var modalEl3 = document.getElementById("modal-description-movie3")

    var movie3ModalLink = document.getElementById("movie-link3")
        movie3ModalLink.href = movie3imdbLink

    var movie3ModalLocation = document.createElement("p");
        modalEl3.append(movie3ModalLocation)
        movie3ModalLocation.textContent = movie3imdbLocation
    
    var movie3ModalRating = document.createElement("p");
        modalEl3.append(movie3ModalRating)
        movie3ModalRating.textContent = movie3imdbRating
})}

})
}
)})})}
