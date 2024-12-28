import s from "./ImageCard.module.css";

function ImageCard({ src, alt, openModal }) {
  return (
    <div onClick={openModal}>
      <img src={src} alt={alt} className={s.img} />
    </div>
  );
}

export default ImageCard;
