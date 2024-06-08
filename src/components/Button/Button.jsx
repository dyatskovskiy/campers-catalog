import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({ children }) => {
  return <button className={clsx(`${css.button}`)}>{children}</button>;
};
