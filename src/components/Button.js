/** @jsx jsx */
import React from 'react';
import { jsx, Styled } from 'theme-ui';

const StyledButton = ({ color = 'primary', text = '', ...props }) => {
  return (
    <a {...props}>
      <button
        sx={{
          color,
          bg: `${color}25`,
          appearance: 'none',
          display: 'inline-block',
          px: 4,
          py: 3,
          fontSize: 0,
          fontFamily: 'monospace',
          border: '2px solid',
          borderColor: color,
          cursor: 'pointer',
          width: 'auto',
          borderRadius: 0,
          transition: '0.3s',
          userSelect: 'none',
          WebkitTapHighlightColor: 'rgba(0,0,0,0)',
          textShadow: color,
          mx: 3,
          ':hover': {
            color: color === 'light' ? 'dark' : 'light',
            bg: color,
          },
          ':active': {
            opacity: 0.3,
          },
        }}
      >
        {text}
      </button>
    </a>
  );
};

export default StyledButton;
