import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import IconButton from './components/IconButton/IconButton';
import { ReactComponent as CloseIcon } from './components/IconButton/cross.svg';
import './App.css';

export default function App() {
  const [imageRequest, setImageRequest] = useState('');
  const [largeImage, setLargeImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = imageRequest => {
    setImageRequest(imageRequest);
  };

  const setTarget = largeImage => {
    setLargeImage(largeImage);
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Searchbar forSubmit={handleFormSubmit} />
      <ImageGallery imageRequest={imageRequest} toClick={setTarget} />
      <ToastContainer />
      {showModal && (
        <Modal forClose={toggleModal}>
          <img src={largeImage} alt={largeImage} />
          <IconButton
            type="button"
            aria-label="Добавить заметку"
            onClick={toggleModal}
          >
            <CloseIcon fill="#fff" />
          </IconButton>
        </Modal>
      )}
    </>
  );
}
