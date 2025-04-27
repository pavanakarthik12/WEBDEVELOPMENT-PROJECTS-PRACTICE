// main agar kahoon tumsa haseen khayanat mein  (have to add documentation)

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });

    const movies = [
        {
            title: "Stranger Things",
            image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
            genre: "Sci-Fi & Fantasy",
            year: 2016
        },
        {
            title: "The Witcher",
            image: "https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
            genre: "Sci-Fi & Fantasy",
            year: 2019
        },
        {
            title: "Money Heist",
            image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
            genre: "Crime",
            year: 2017
        },
        {
            title: "The Queen's Gambit",
            image: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
            genre: "Drama",
            year: 2020
        },
        {
            title: "Breaking Bad",
            image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
            genre: "Crime",
            year: 2008
        },
        {
            title: "The Crown",
            image: "https://image.tmdb.org/t/p/w500/jIzXQklmFZFnipYFQZgXQ6xVvTH.jpg",
            genre: "Drama",
            year: 2016
        },
        {
            title: "Dark",
            image: "https://image.tmdb.org/t/p/w500/5Lo4sU9FgtddQ24VWQNk8QFe1Y3.jpg",
            genre: "Sci-Fi & Fantasy",
            year: 2017
        },
        {
            title: "Narcos",
            image: "https://image.tmdb.org/t/p/w500/7u3pxc0K1wx32IleAkLv78MKgrw.jpg",
            genre: "Crime",
            year: 2015
        }
    ];

    function createMovieElement(movie) {
        const movieEl = document.createElement('div');
        movieEl.className = 'movie';
        
        movieEl.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.genre} • ${movie.year}</p>
                <div class="movie-actions">
                    <i class="fas fa-play"></i>
                    <i class="fas fa-plus"></i>
                    <i class="fas fa-thumbs-up"></i>
                    <i class="fas fa-thumbs-down"></i>
                </div>
            </div>
        `;
        
        return movieEl;
    }

    const popularRow = document.getElementById('popular-row');
    const trendingRow = document.getElementById('trending-row');
    const continueRow = document.getElementById('continue-row');

    const shuffledMovies = [...movies].sort(() => 0.5 - Math.random());
    const shuffledMovies2 = [...movies].sort(() => 0.5 - Math.random());

    movies.forEach(movie => {
        popularRow.appendChild(createMovieElement(movie));
    });

    shuffledMovies.forEach(movie => {
        trendingRow.appendChild(createMovieElement(movie));
    });

    shuffledMovies2.forEach(movie => {
        continueRow.appendChild(createMovieElement(movie));
    });

    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const allMovies = document.querySelectorAll('.movie');
        
        allMovies.forEach(movie => {
            const title = movie.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                movie.style.display = 'block';
            } else {
                movie.style.display = 'none';
            }
        });
    });
});