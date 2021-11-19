import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchArticles from '../../services/apiService';
import ImagesIdleView from './ImagesIdleView';
import ImagesPendingView from './ImagesPendingView';
import ImagesErrorView from './ImagesErrorView';
import ImagesDataView from './ImagesDataView';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function ImageGallery({ imageRequest, toClick }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (imageRequest === '') {
      return;
    }

    setImages([]);
    setPage(1);
    setStatus(Status.PENDING);

    fetchArticles(imageRequest)
      .then(images => {
        setImages(images);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [imageRequest]);

  useEffect(() => {
    if (page === 1) {
      return;
    }

    setStatus(Status.PENDING);

    fetchArticles(imageRequest, page)
      .then(images => {
        setImages(prevState => [...prevState, ...images]);
        setStatus(Status.RESOLVED);
        document
          .getElementById('btn')
          .scrollIntoView({ block: 'center', behavior: 'smooth' });
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const addImages = () => {
    setPage(prevState => prevState + 1);
  };

  if (status === 'idle') {
    return <ImagesIdleView />;
  }

  if (status === 'pending') {
    return <ImagesPendingView />;
  }

  if (status === 'rejected') {
    return <ImagesErrorView message={error.message} />;
  }

  if (status === 'resolved') {
    return (
      <ImagesDataView images={images} toClick={toClick} forClick={addImages} />
    );
  }
}

ImageGallery.propTypes = {
  imageRequest: PropTypes.string.isRequired,
  toClick: PropTypes.func.isRequired,
};
