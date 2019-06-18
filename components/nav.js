import React from 'react';
import Link from 'next/link';

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'facebook' },
  { href: 'https://github.com/segmentio/create-next-app', label: 'instagram' },
].map(link => {
  link.key = `nav-link-${link.label}`
  return link
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <span className="profile"></span>
        </Link>
      </li>
      <li><span className="menu"></span></li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <span className={label}></span>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        display: flex;
        align-items: center;
      }
      nav ul {
        list-style: none;
      }
      nav ul li {
        margin: 10px;
      }
      .facebook {
        display:flex;
        width: 40px;
        height: 40px;
        background-image: url('/static/facebook.svg');
        background-repeat: no-repeat;
        background-position: center;
      }
      .instagram {
        display:flex;
        width: 40px;
        height: 40px;
        background-image: url('/static/instagram.svg');
        background-repeat: no-repeat;
        background-position: center;
      }
    `}</style>
  </nav>
)

export default Nav;
