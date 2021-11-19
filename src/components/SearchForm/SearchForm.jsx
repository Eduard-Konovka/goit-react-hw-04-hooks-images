import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

export default function SearchForm({ forSubmit }) {
  const [imageRequest, setImageRequest] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (imageRequest.trim() === '') {
      toast.error(
        'Check the correctness of the entered data, images of this category do not exist!',
      );
      setImageRequest('');
      return;
    }

    forSubmit(imageRequest.trim());
    setImageRequest('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <button type="submit" className={s.btn}>
        <span className={s.btn_label}>Search</span>
      </button>

      <input
        className={s.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={imageRequest}
        onChange={e => setImageRequest(e.target.value.toLowerCase())}
      />
    </form>
  );
}

SearchForm.defaultProps = {
  forSubmit: () => null,
};

SearchForm.propTypes = {
  forSubmit: PropTypes.func.isRequired,
};
