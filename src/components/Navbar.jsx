import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [handleShow, setHandleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else setHandleShow(false);
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`${styles.navbar} ${handleShow && styles.navbar__bg}`}>
      <img
        className={styles.navbar__logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png?20170904093427"
        alt=""
      />
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
        alt=""
        className={styles.navbar__userlogo}
      />
    </div>
  );
};

export default Navbar;
