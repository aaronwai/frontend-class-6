import { useState } from 'react';
import logo from '../assets/T.png';
import PageLinks from './PageLinks.jsx';
import SocialLinks from './SocialLinks.jsx';

const Navbar = () => {
  const [isToggled, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((previousValue) => !previousValue);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-flex">
        <img src={logo} alt="logo" className="logo" />

        {/* Main menu */}
        <div className="main-menu">
          <PageLinks groupClass="main-menu-list" />
          <SocialLinks
            groupClass="nav-icons"
            listItemClass="nav-icon"
          />
        </div>

        {/* Mobile menu */}
        <div className="mobile-menu">
          <div className="mobile-menu-toggle">
            <button
              type="button"
              onClick={handleToggle}
              aria-label={isToggled ? '關閉導覽選單' : '開啟導覽選單'}
              aria-expanded={isToggled}
              aria-controls="mobile-menu-items"
            >
              <i className="fa-solid fa-bars" aria-hidden="true"></i>
            </button>

            <div
              id="mobile-menu-items"
              className={
                isToggled
                  ? 'mobile-menu-items active'
                  : 'mobile-menu-items'
              }
            >
              <PageLinks groupClass="mobile-menu-list" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;