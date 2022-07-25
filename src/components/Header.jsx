import React from "react";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import axios from "../configs/axios";

const IMG_URL = "https://image.tmdb.org/t/p/original";

const Header = (props) => {
  const [movie, setMovie] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(props.fetchURL);
  //     setMovie(
  //       request.data.results[
  //         Math.floor(Math.random() * request.data.results.length - 1)
  //       ]
  //     );
  //     return request;
  //   }
  //   fetchData();
  // }, [props.fetchURL]);

  

  return (
    <div className={styles.header__overlay}>
      <header
        className={styles.header}
        style={{
          backgroundImage: `url('${IMG_URL}${movie?.backdrop_path}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className={styles.header__contents}>
          <h2 className={styles.header__title}>
            {movie?.name || movie?.title || movie?.original_name}
          </h2>
          <button className={styles.header__button}>Play</button>
          <button className={styles.header__button}>Add to list</button>
          <p className={styles.header__description}>{movie?.overview}</p>
        </div>
        <div className={styles.header__joining}></div>
      </header>
    </div>
  );
};

export default Header;
