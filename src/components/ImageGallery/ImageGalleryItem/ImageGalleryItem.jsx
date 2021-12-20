import React from "react";
import PropTypes from "prop-types";
import style from "./ImageGalleryItem.module.css";

const ImageGalleryItem = function ({ item, toOpen }) {
  const { webformatURL, largeImageURL, tags } = item;
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={webformatURL}
        onClick={toOpen}
        alt={tags}
        className={style.ImageGalleryItemImage}
        data-src={largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  toOpen: PropTypes.func,
};

export default ImageGalleryItem;
