const Movieresults = document.getElementById("results");
let favoriteMovies = JSON.parse(localStorage.getItem("watchlist")) || [];

// Render array of movies in HTML
function renderMovies(array) {
    Movieresults.innerHTML = array.map((movie) => addMovieContent(movie)).join("");
}

// Create HTML of movie card
function addMovieContent(movie) {
    return `
    <section class="movieInfo">
            <div class="movieImgContent">
                <img src="${movie.poster}" alt="1">
            </div>


            <div class="ALLINFO"> 
                <div class="movieInfoContentPrimary">
                    <h1>${movie.title}</h1>
                    <h3>${movie.year}</h3>
                </div>

                <div class="movieInfoContentSecondary">
                    <h4>&#9733;${movie.imdbRating}</h4>
                    <h4>${movie.runtime}</h4>
                    <h4>${movie.genre}</h4>
                </div>

                <div class="movieDescription">
                    <p>${movie.plot}</p>
                    <button class="fav-btn ${checkMovieInList(movie)}">Love</button>
                </div>
            </div>
        </section>
    `;
}

// Define className of movie's watchlist button based on if movie in the watchlist or not
function checkMovieInList(movie) {
    let className = "favoriteAddButton";
    favoriteMovies.forEach((element) => {
        if (movie.imdbID === element.imdbID) {
            className = "remove-watchlist-btn";
        }
    });
    return className;
}

export { Movieresults, favoriteMovies, renderMovies };
