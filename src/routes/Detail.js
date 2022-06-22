import { useState, useEffect } from 'react';
import { generatePath, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';

// useState -> 기존값에 있는 값을 새로운 값과 비교해 렌더링해줌으로서 일부 내용만 변경하도록 해주는 것.
// useEffect -> 특정 요소가 진행될 렌더링을 한 번 또는 여러 번 갱신하게 관리해 줌.

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();

    const { id } = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            setMovie(json.data.movie);
            setLoading(false);
    };
    console.log(loading, movie);
    useEffect(() => {
        getMovie();
        }, []);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : 
            <div>
                <img src={movie.large_cover_image} alt=""/>
                <h1>{movie.title}</h1>
                <h2>Rating: {movie.rating}</h2>
                <h2>Year: {movie.year}</h2>
                <h3>Runtime: {movie.runtime}min</h3>
                <h4>genres</h4>
                <ul>
                    {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
                </ul>
                <p>{movie.description_full}</p>
            </div>}
        </div>
        );
}

Detail.propTypes = {
    large_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    description_full: PropTypes.string.isRequired
}

export default Detail;
