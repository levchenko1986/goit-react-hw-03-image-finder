import React from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
import style from "./ImageGallery.module.css";

const ImageGallery = function ({ list, toOpen }) {
  return (
    <ul className={style.ImageGallery}>
      {list.map((elem) => (
        <ImageGalleryItem toOpen={toOpen} key={elem.id} item={elem} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toOpen: PropTypes.func.isRequired,
};

export default ImageGallery;
