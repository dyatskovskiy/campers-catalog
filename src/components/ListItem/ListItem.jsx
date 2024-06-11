import css from './LIstItem.module.css';

export const CamperCard = ({ camperData }) => {
  return (
    <div className={css.wrapper}>
      <img className={css.camperPhoto} src={camperData.gallery[0]} alt="Camper" />

      <div className={css.mainInfoBlock}>
        <div className={css.topTextBlock}>
          <h3 className={css.topText}>{camperData.name}</h3>

          <div className={css.priceBlock}>
            <p className={css.topText}>{`€${camperData.price}.00`}</p>

            <button className={css.favoriteButton} />
          </div>
        </div>
      </div>
    </div>
  );
};
