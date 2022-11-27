var pageTitle = document.getElementById("title");
pageTitle.textContent = "Showing results for " + localStorage.getItem("location");

var movieEl0 = document.getElementById("movie-0")
var movieEl1 = document.getElementById("movie-1")
var movieEl2 = document.getElementById("movie-2")



//fetch data from local storage, search OMDB API
function getMovies() {
    var locationInputRecall = localStorage.getItem("location");
    console.log("retrieving " + locationInputRecall)

    var requestMovieUrl = "http://www.omdbapi.com/?s=" + locationInputRecall + "&apikey=dacedb99"  

    fetch(requestMovieUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data){
            console.log(data)
            loadMovies(data);
        })
}


// populate elements with first 3 elements from data returned in OMDB API response
function loadMovies(data) {

    movieEl0.textContent = data.Search[0].Title
    var movie0year = document.createElement("p"); 
    movieEl0.append(movie0year)
    movie0year.textContent = data.Search[0].Year


    movieEl1.textContent = data.Search[1].Title
    var movie1year = document.createElement("p");
    movieEl1.append(movie1year)
    movie1year.textContent = data.Search[1].Year


    var movie2year = document.createElement("p");
    movieEl2.textContent = data.Search[2].Title
    movieEl2.append(movie2year)
    movie2year.textContent = data.Search[2].Year


    var imdbIDs = [];
    imdbIDs.push(data.Search[0].imdbID);
    imdbIDs.push(data.Search[1].imdbID);
    imdbIDs.push(data.Search[2].imdbID);
    console.log(imdbIDs);
    getIMDB(imdbIDs);
}



function getIMDB(imdbIDs) {

    var movie0Button = document.createElement("button");
    movieEl0.append(movie0Button);
    movie0Button.setAttribute("class", "modal-button");
    movie0Button.setAttribute("id", "movieButton0");
    movie0Button.textContent = "https://www.imdb.com/title/" + imdbIDs[0];

    var movie1Button = document.createElement("button");
    movieEl1.append(movie1Button);
    movie1Button.setAttribute("class", "modal-button");
    movie1Button.setAttribute("id", "movieButton1");
    movie1Button.textContent = "https://www.imdb.com/title/" + imdbIDs[1];

    var movie2Button = document.createElement("button");
    movieEl2.append(movie2Button);
    movie2Button.setAttribute("class", "modal-button");
    movie2Button.setAttribute("id", "movieButton2");
    movie2Button.textContent = "https://www.imdb.com/title/" + imdbIDs[2];

    

    // for (var i = 0; i < imdbIDs.length; i++) {
    //     var requestIMDBUrl = "http://www.omdbapi.com/?i=" + imdbIDs[i] + "&apikey=dacedb99"
        
    //     fetch(requestIMDBUrl)
    //         .then(function (response) {
    //             return response.json();
    //         })
    //         .then(function (data) {
    //             // console.log(data);
    //         });                    
    // }
    getMovie1Info(imdbIDs);
    getMovie2Info(imdbIDs);
    getMovie3Info(imdbIDs)
}

function getMovie1Info (imdbIDs) {
    var requestMovie1PlotUrl = "http://www.omdbapi.com/?i=" + imdbIDs[0] + "&full&apikey=dacedb99"
    
    fetch(requestMovie1PlotUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // console.log(data);
                var moviePlot = data.Plot
                var imdbRating = data.imdbRating

            var movie1Info = [];
            movie1Info.push(moviePlot)
            movie1Info.push(imdbRating)

            console.log(movie1Info)
            });
}

function getMovie2Info (imdbIDs) {
    var requestMovie2PlotUrl = "http://www.omdbapi.com/?i=" + imdbIDs[1] + "&full&apikey=dacedb99"
    
    fetch(requestMovie2PlotUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // console.log(data);
                var moviePlot = data.Plot
                var imdbRating = data.imdbRating

            var movie2Info = [];
            movie2Info.push(moviePlot)
            movie2Info.push(imdbRating)

            console.log(movie2Info)
            });
}

function getMovie3Info (imdbIDs) {
    var requestMovie3PlotUrl = "http://www.omdbapi.com/?i=" + imdbIDs[2] + "&full&apikey=dacedb99"
    
    fetch(requestMovie3PlotUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // console.log(data);
                var moviePlot = data.Plot
                var imdbRating = data.imdbRating

            var movie3Info = [];
            movie3Info.push(moviePlot)
            movie3Info.push(imdbRating)

            console.log(movie3Info)
            });
}
// initialize function to lookup movies via API
getMovies();
