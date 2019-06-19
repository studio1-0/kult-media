import React, { useState } from 'react';
import Link from 'next/link';
import theme from '../styles/theme';


const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'facebook' },
  { href: 'https://github.com/segmentio/create-next-app', label: 'instagram' },
].map(link => {
  link.key = `nav-link-${link.label}`
  return link
});

const Nav = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <nav>
      {isMenuOpen ? <span className="menu" onClick={closeMenu}></span> :
      <ul>
        <li>
          <Link prefetch href="/">
            <span className="profile"></span>
          </Link>
        </li>
        <li><span className="menu" onClick={openMenu}></span></li>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <span className={label}></span>
            </Link>
          </li>
        ))}
      </ul>}

      <style jsx>{`
        nav {
          display: flex;
          min-width: 150px;
          align-items: center;
          justify-content: flex-end;
          z-index: 2;
        }
        nav ul {
          list-style: none;
        }
        span {
          display:flex;
          width: 75px;
          height: 75px;
          border-radius: 50% 0 0 50%;
          background-repeat: no-repeat;
          background-position: center;
        }
        span:hover {
          cursor: pointer;
        }
        .profile {
          background-image: url('/static/profile.svg');
        }
        .menu {
          background-image: url('/static/burger.svg');
          background-color: ${theme.colors.action};
        }
        .close {
          background-image: url('/static/cross.svg');
        }
        .facebook {
          background-image: url('/static/facebook.svg');
        }
        .instagram {
          background-image: url('/static/instagram.svg');
        }
      `}</style>
    </nav>
  )
}

export default Nav;
