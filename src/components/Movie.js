import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, medium_cover_image, title, summary, rating, year, genres}) {
    return (
    <div>
        <img src={medium_cover_image} alt=""/>
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <ul>
            {genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
    </div>);
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
    
}

export default Movie;