import React from 'react';
import Link from 'next/link';
import Logo from './logo';

const Header = () => (
  <div className="header">
    <Link prefetch href="/">
      <span><Logo /></span>
    </Link>

    <style jsx>{`
      .header {
        max-width: 150px;
        padding: 15px 0 0 15px;
        z-index: 2;
      }

      .header span:hover {
        cursor: pointer;
      }
    `}</style>
  </div>
)

export default Header;
