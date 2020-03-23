/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import './TextLink.css';

export const TextLink = ({ children, styleProps, ...props }) => (
  <a
    className="mg-link"
    {...props}
    sx={{
      color: 'light',
      fontSize: [0, 2],
      my: 1,
      letterSpacing: 0.5,
      ...styleProps
    }}
    target="_blank"
  >
    {children}
  </a>
);
