/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';

const Title = ({ children }) => {
  return (
    <Styled.h1>
      <Link
        sx={{
          color: `inherit`,
          boxShadow: `none`,
          textDecoration: `none`,
        }}
        to={`/`}
      >
        {children}
      </Link>
    </Styled.h1>
  );
};

export default ({ children, title, ...props }) => {
  return (
    <header>
      <div
        sx={{
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          pt: 4,
        }}
      >
        <div
          sx={{
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            mb: 4,
          }}
        >
          <Title {...props}>{title}</Title>
          {children}
        </div>
      </div>
    </header>
  );
};
