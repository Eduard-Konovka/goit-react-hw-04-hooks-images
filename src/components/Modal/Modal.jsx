import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ forClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => e.code === 'Escape' && forClose();

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [forClose]);

  const handleBackdropClick = e => {
    e.currentTarget === e.target && forClose();
  };

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  forClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
