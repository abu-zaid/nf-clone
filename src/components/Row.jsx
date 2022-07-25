import React, { useEffect, useState } from "react";
import styles from "./Row.module.css";
import movieTrailer from "movie-trailer";

import axios from "../configs/axios";
import YouTube from "react-youtube";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const Row = (props) => {
  const [trailerURL, setTrailerURL] = useState("");
  const [movies, setMovies] = useState([]);
  const [headerMovie, setHeaderMovie] = useState([]);

  const headerHandler = (movie) => {
    setHeaderMovie({
      name: movie.title,
      key: movie.id,
      description: movie.overview,
      image: movie.backdrop_path,
    });
    console.log(headerMovie);
  };

  const trailerHandler = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(
        `${movie.name || movie.original_title || movie.title} trailer`,
        {
          tmdbId: movie.id,
        }
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={styles.row}>
      <h1 className={styles.row__title}>{props.title}</h1>
      <div
        className={`${styles.row__posters} ${
          props.posterBoy && styles.row__posters_boys
        } `}
      >
        {movies.map((movie) => {
          return (
            <img
              onClick={() => {
                trailerHandler(movie);
                headerHandler(movie);
              }}
              key={movie?.id}
              src={`${IMG_URL}${
                props.posterBoy ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie.name}
              className={`${styles.row__poster} ${
                props.posterBoy && styles.row__poster_boy
              } `}
            />
          );
        })}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

export default Row;
