import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({ children, additionalStyles }) => {
  return (
    <button className={clsx(css.button)} style={additionalStyles}>
      {children}
    </button>
  );
};
