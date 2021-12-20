import React from 'react';
import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

const MyLoader = function () {
  return (
    <div className ={styles.loaderWrapper}>
        <Loader className ={styles.loader}
        type="Grid"
        color="#3f51b5"
        height={150}
        width={150}
        timeout={2000}
      />
    </div>
    );
}
export default MyLoader;