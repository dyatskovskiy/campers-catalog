import css from './CampersList.module.css';

import { CamperCard } from '../ListItem/ListItem';

export const CampersList = ({ campers }) => {
  return (
    <ul className={css.wrapper}>
      {campers.map(camper => (
        <li key={camper._id}>
          <CamperCard camperData={camper} />
        </li>
      ))}
    </ul>
  );
};
