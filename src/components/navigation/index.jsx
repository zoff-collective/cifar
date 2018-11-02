import Link from 'gatsby-link';
import React from 'react';

import styles from './styles';

export default () => <header>
  <style jsx>{styles}</style>

  <strong className="title">EU sanctions watch</strong>

  <nav>
    <Link to="/">Home</Link>
    <Link to="/persons/">Persons</Link>
    <Link to="/report/">Report</Link>
  </nav>
</header>
