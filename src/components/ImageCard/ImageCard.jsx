import s from "./ImageCard.module.css";

function ImageCard({ src, alt }) {
  return (
    <div>
      <img src={src} alt={alt} className={s.img} />
    </div>
  );
}

export default ImageCard;
