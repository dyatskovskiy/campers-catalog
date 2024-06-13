import Icons from '../../assets/icons/sprite.svg';

import css from './LocationInput.module.css';

export const LocationInput = () => {
  return (
    <div>
      <label className={css.label} htmlFor="location">
        Location
      </label>

      <div className={css.inputWrapper}>
        <input className={css.input} type="text" id="location" placeholder="City" />

        <svg className={css.mapPinIcon} width={18} height={20}>
          <use href={Icons + '#map-pin'} />
        </svg>
      </div>
    </div>
  );
};
