import pendingImage from './phones-tablet-2.png';
import s from './ImageGallery.module.css';

export default function ImagesIdleView() {
  return (
    <div role="alert" className={s.box}>
      <img src={pendingImage} alt="Pixabay" className={s.img} />
    </div>
  );
}
