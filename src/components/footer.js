/** @jsx jsx */
import React from "react"
import { FaTwitter, FaDiscord } from 'react-icons/fa'
import { jsx } from "theme-ui"

const Footer = () => (
  <footer
    sx={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'center',
      p: 2,
      mt: 4,
      opacity: 0.5
    }}
  >
    <a
      sx={{
        color: 'light'
      }}
      href="https://twitter.com/metafam"
      target="_blank"
    >
      <FaTwitter
        size={25}
      />
    </a>
    <a
      sx={{
        color: 'light',
        ml: 4,
      }}
      href="https://discordapp.com/invite/Hf54gd8"
      target="_blank"
    >
      <FaDiscord
        size={25}
      />
    </a>
  </footer>
);

export default Footer;
