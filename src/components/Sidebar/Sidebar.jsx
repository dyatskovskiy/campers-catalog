import { LocationInput } from '../Input/LocationInput';
import css from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside className={css.wrapper}>
      <LocationInput />
    </aside>
  );
};
