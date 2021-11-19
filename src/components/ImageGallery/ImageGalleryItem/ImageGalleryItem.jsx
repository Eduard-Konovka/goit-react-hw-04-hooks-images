import s from './ImageGalleryItem.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ image, tags, largeImage, toClick }) {
  return (
    <img
      src={image}
      alt={tags}
      onClick={() => toClick(largeImage)}
      className={s.image}
    />
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toClick: PropTypes.func.isRequired,
};
