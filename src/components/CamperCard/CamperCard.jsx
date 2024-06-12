import css from './CamperCard.module.css';
import Icons from '../../assets/icons/sprite.svg';
import { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { CarFeaturesItem } from '../CarFeaturesItem/CarFeaturesItem';
import { UsersIcon } from '../../assets/icons/UsersIcon';
import { TransmissionIcon } from '../../assets/icons/TransmissionIcon';
import { GasIcon } from '../../assets/icons/GasIcon';
import { KitchenIcon } from '../../assets/icons/KitchenIcon';
import { BedIcon } from '../../assets/icons/BedIcon';
import { ConditionerIcon } from '../../assets/icons/ConditionerIcon';
import { Button } from '../Button/Button';

export const CamperCard = ({ camperData }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={css.wrapper}>
      <img className={css.camperPhoto} src={camperData.gallery[0]} alt="Camper" />

      <div className={css.mainInfoBlock}>
        <div className={css.topTextBlock}>
          <h3 className={clsx(css.topText, css.name)}>{camperData.name}</h3>

          <div className={css.priceBlock}>
            <p className={css.topText}>{`€${camperData.price}.00`}</p>

            <button className={css.favoriteButton} onClick={handleClick}>
              <svg
                className={clsx(css.heartIcon, active === true && css.activeHeart)}
                width={24}
                height={24}
              >
                <use href={Icons + '#heart'} />
              </svg>
            </button>
          </div>
        </div>

        <div className={css.ratingBlock}>
          <svg className={css.starIcon} width={16} height={16}>
            <use href={Icons + '#star'} />
          </svg>

          <Link
            className={css.ratingLink}
          >{`${camperData.rating} (${camperData.reviews.length} Reviews)`}</Link>

          <svg className={css.mapPinIcon} width={16} height={16}>
            <use href={Icons + '#map-pin'} />
          </svg>
          <p className={css.location}>{camperData.location}</p>
        </div>

        <p className={css.description}>{camperData.description}</p>

        <div className={css.carFeaturesBlock}>
          <CarFeaturesItem text={camperData.adults + ' adults'}>
            <UsersIcon width={20} height={20} />
          </CarFeaturesItem>

          <CarFeaturesItem text={camperData.transmission}>
            <TransmissionIcon width={20} height={20} />
          </CarFeaturesItem>

          <CarFeaturesItem text={camperData.engine}>
            <GasIcon width={20} height={20} />
          </CarFeaturesItem>

          <CarFeaturesItem text={'kitchen'}>
            <KitchenIcon width={20} height={20} />
          </CarFeaturesItem>

          <CarFeaturesItem text={camperData.details.beds + ' beds'}>
            <BedIcon width={20} height={20} />
          </CarFeaturesItem>

          <CarFeaturesItem text={'AC'}>
            <ConditionerIcon width={20} height={20} />
          </CarFeaturesItem>
        </div>

        <Button additionalStyles={{}}>Show more</Button>
      </div>
    </div>
  );
};
