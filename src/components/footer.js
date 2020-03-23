/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { TextLink } from './TextLink';

const Footer = () => (
  <footer
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: 'space-around',
      flexDirection: 'row',
      flexWrap: 'wrap',
      p: 2,
      mt: [3, 5],
      opacity: 0.9,
      fontFamily: 'monospace',
      fontSize: 1,
      maxWidth: 850,
      mx: 'auto'
    }}
  >
    <TextLink
      styleProps={{ fontSize: '0.75rem' }}
      href="https://forum.metagame.wtf">
      {'🧵\nForums'}
    </TextLink>
    <TextLink
      styleProps={{ fontSize: '0.75rem' }}
      href="https://interspace.metagame.wtf">
      🌌 INTERSPACE
    </TextLink>
    <TextLink
      styleProps={{ fontSize: '0.75rem' }}
      href="https://metafam.github.io/TheSource/timeline/@metagame/">
      🧬 THE SOURCE
    </TextLink>
    
    <TextLink
      styleProps={{ fontSize: '0.75rem' }}
      href="https://twitter.com/metafam">
      🐦 TWITTER
    </TextLink>
  </footer>
);

export default Footer;
