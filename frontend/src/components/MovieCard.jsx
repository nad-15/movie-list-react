import "../css/MovieCard.css"

function MovieCard({ movie }) {

    const heartIcon = (
        <span className="material-symbols-outlined heart-icon">
            favorite
        </span>
    );

    function onFavoriteClick() {
        alert("btn clicked");
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                        {heartIcon}
                    </button>
                </div>
            </div>

            <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCard