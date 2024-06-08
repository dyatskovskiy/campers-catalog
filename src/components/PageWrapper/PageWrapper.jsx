import css from './PageWrapper.module.css';

export const PageWrapper = ({ children }) => {
  return <div className={css.wrapper}>{children}</div>;
};
