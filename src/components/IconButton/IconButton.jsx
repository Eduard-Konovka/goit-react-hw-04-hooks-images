import PropTypes from 'prop-types';
import s from './IconButton.module.css';

export default function IconButton({ children, onClick, ...allyProps }) {
  return (
    <button type="button" className={s.btn} onClick={onClick} {...allyProps}>
      {children}
    </button>
  );
}

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
