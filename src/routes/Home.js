import { useState, useEffect } from 'react';
import Movie from '../components/Movie';


function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // await과 async을 이용한 것
  // const getMoives = async() => {
  //   const json = await (await fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
  //   setMovies(json.data.movies);
  //   setLoading(false);
  // }

  // 기존의 .then을 이용한 것
  useEffect(()=> {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
      .then(response => response.json())
      .then(json => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  return(
    <div>
      {loading ? <h1>Loading...</h1> : 
        <div>
          {movies.map(movie =>
            <Movie 
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              genres={movie.genres}
            />)}
        </div>
      }
    </div>
  );
}

export default Home;