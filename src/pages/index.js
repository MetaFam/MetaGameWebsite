/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react';
import { Link } from 'gatsby';
import { Styled } from 'theme-ui';
import Button from '../components/Button';
import SEO from '../components/seo';
import LogoImage from '../components/LogoImage';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <LogoImage />
    <Styled.h2
      sx={{
        mt: 3,
        fontSize: [3, 4],
        textAlign: 'center',
        textShadow: '0 0 15px rgba(0,0,0,0.9), 0 0 5px rgba(0,0,0,0.9)',
      }}
    >
      A Massive Online Coordination Game
    </Styled.h2>
    <Styled.p
      sx={{
        mt: 2,
        textAlign: 'center',
        maxWidth: 500,
        fontSize: [1, 2],
        textShadow: '0 0 15px rgba(0,0,0,0.9), 0 0 5px rgba(0,0,0,0.9)',
        whiteSpace: 'pre-line',
        color: 'muted',
      }}
    >
      {"MetaGame is the virtual Silicon Valley of the Web3 universe. " +
      "It is an attempt to gamify positive-sum value creation and make the Web3 ecosystem easier to navigate for newcomers and veterans alike."
      }
    </Styled.p>
    <div
      sx={{
        mt: [4, 5],
        display: 'flex',
        justifyContent: 'center',
        width: ['100%', 'auto']
      }}
    >
      <Button
        text="PLAY"
        href="https://discordapp.com/invite/Hf54gd8"
        target="_blank"
      />
      <Link
        to={'/learn'}
      >
        <Button
          text="LEARN"
          color="secondary"
        />
      </Link>
      
    </div>
  </>
);

export default IndexPage;
