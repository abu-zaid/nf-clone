import React, { useEffect, useState } from "react";
import requests from "../configs/requests";
import styles from "./Row.module.css";

import axios from "../configs/axios";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const Row = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchURL);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [props.fetchURL]);

  console.log(movies);
  return (
    <div className={styles.row}>
      <h1 className={styles.row__title}>{props.title}</h1>
      <div className={styles.row__posters}>
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              src={`${IMG_URL}${movie.poster_path}`}
              alt={movie.title}
              className={styles.row__poster}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
