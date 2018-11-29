import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mq } from '../../tokens';

export default css`
  header {
    align-items: center;
    background-color: ${colors.beige};
    color: ${colors.blue};
    display: flex;
    padding: 0.75rem 1.5rem;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  @media ${mq.phone} {
    header {
      padding-bottom: 1rem;
      padding-top: 1rem;
    }
  }

  @media ${mq.tablet} {
    header {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
      position: static;
    }
  }

  nav {
    align-self: flex-end;
    margin-left: auto;
  }
`;

export const navLinkStyles = css.resolve`
  a {
    color: currentColor;
    font-size: 0.8rem;
    text-decoration: none;
  }

  @media ${mq.tablet} {
    a {
      font-size: 1rem;
    }
  }

  a[aria-current],
  a:hover,
  a:focus {
    text-decoration: underline;
  }

  a + a {
    margin-left: 1rem;
  }

  @media ${mq.tablet} {
    a + a {
      margin-left: 1.5rem;
    }
  }
`;

export const titleStyles = css.resolve`
  a {
    color: currentColor;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.025rem;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
  }

  @media ${mq.tablet} {
    a {
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0.05rem;
    }
  }
`;
