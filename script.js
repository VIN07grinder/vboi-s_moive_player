function loadMovie() {
    const tmdbId = document.getElementById('tmdbId').value;
    if (tmdbId) {
        const movieUrl = `https://vidlink.pro/movie/${tmdbId}`;
        document.getElementById('movieFrame').src = movieUrl;
    } else {
        alert("Please enter a valid TMDB ID!");
    }
}

function launchFullscreenMovie() {
    const tmdbId = document.getElementById('tmdbId').value;
    if (tmdbId) {
        let newWindow = window.open('', '_blank', 'noopener,noreferrer');
        newWindow.document.write(`
            <html>
            <head>
                <style>
                    body { margin: 0; overflow: hidden; background-color: black; }
                    iframe { width: 100vw; height: 100vh; border: none; }
                </style>
            </head>
            <body>
                <iframe src="https://vidlink.pro/movie/${tmdbId}" allowfullscreen></iframe>
            </body>
            </html>
        `);
        newWindow.document.close();
    } else {
        alert("Please enter a valid TMDB ID!");
    }
}