import Icons from '../../assets/icons/sprite.svg';

import css from './LocationInput.module.css';

export const LocationInput = () => {
  return (
    <div>
      <label className={css.label} htmlFor="location">
        Location
      </label>
      <input className={css.input} type="text" id="location">
        <svg className={css.mapPinIcon} width={16} height={16}>
          <use href={Icons + '#map-pin'} />
        </svg>
      </input>
    </div>
  );
};
