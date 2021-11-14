import pendingImage from './phones-tablet-2.png';

export default function ImagesIdleView() {
  return (
    <div role="alert">
      <img src={pendingImage} alt="Pixabay" />
    </div>
  );
}
