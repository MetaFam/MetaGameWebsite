/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import React from 'react';

export default ({ children, title, ...props }) => {
  return (
    <header>
      <Styled.div
        as="header"
        sx={{
          pt: [3, 5],
          pb: [3, 4]
        }}
      >
        <div
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: `0 auto`,
          }}
        >
          {children}
        </div>
      </Styled.div>
    </header>
  );
};
