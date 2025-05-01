function loadMovie() {
    const tmdbId = document.getElementById('tmdbId').value;
    if (tmdbId) {
        const movieUrl = `https://vidlink.pro/movie/${tmdbId}`;
        document.getElementById('movieFrame').src = movieUrl;
    } else {
        alert("Please enter a valid TMDB ID!");
    }
}