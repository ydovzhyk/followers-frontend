import { NavLink, useLocation } from 'react-router-dom';

import s from './Header.module.scss';
import Logo from 'components/Shared/Logo';

const Header = () => {
  const location = useLocation();
  const getClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  return (
    <header className={s.header}>
      <Logo />
      <div className={s.wrap}>
        <NavLink
          className={getClassName({ isActive: location.pathname === '/' })}
          to="/"
        >
          home
        </NavLink>
        <NavLink
          className={getClassName({
            isActive: location.pathname === '/tweets',
          })}
          to="/tweets"
        >
          twetts
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
