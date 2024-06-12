import css from './CarFeaturesItem.module.css';

export const CarFeaturesItem = ({ children, text }) => {
  return (
    <div className={css.wrapper}>
      {children}
      <span className={css.text}>{text}</span>
    </div>
  );
};
