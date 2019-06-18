import React from 'react';
import Link from 'next/link';
import Logo from './logo';

const Header = () => (
  <div className="header">
    <Link prefetch href="/">
      <Logo />
    </Link>

    <style jsx>{`
      .header {
        padding: 15px;
      }
    `}</style>
  </div>
)

export default Header;
