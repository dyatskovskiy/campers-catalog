import css from './Sidebar.module.css';

export const Sidebar = ({ children }) => {
  return <aside className={css.wrapper}>{children}</aside>;
};
