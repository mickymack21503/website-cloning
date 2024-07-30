function slide(direction, sectionId = 'movies') {
    const container = document.getElementById(sectionId);
    const scrollAmount = direction * 200;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('loginModal');
    const closeBtn = modal.getElementsByClassName('close')[0];

    loginBtn.onclick = function () {
        modal.style.display = 'block';
    }

    closeBtn.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // New Feature: Watch Trailer
    const movies = document.querySelectorAll('.movies img');
    const trailerModal = document.getElementById('trailerModal');
    const trailerVideo = document.getElementById('trailerVideo');
    const trailerCloseBtn = trailerModal.getElementsByClassName('close')[0];

    movies.forEach(movie => {
        movie.onclick = function () {
            const trailerSrc = movie.getAttribute('data-trailer');
            trailerVideo.src = trailerSrc;
            trailerModal.style.display = 'block';
        }
    });

    trailerCloseBtn.onclick = function () {
        trailerModal.style.display = 'none';
        trailerVideo.pause();
        trailerVideo.currentTime = 0;
    }

    window.onclick = function (event) {
        if (event.target == trailerModal) {
            trailerModal.style.display = 'none';
            trailerVideo.pause();
            trailerVideo.currentTime = 0;
        }
    }


    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    searchBtn.onclick = function () {
        const query = searchInput.value.toLowerCase();
        alert('Searching for: ' + query);
    }
});
