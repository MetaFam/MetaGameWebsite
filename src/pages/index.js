/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import { Styled } from 'theme-ui';
import Button from '../components/Button';
import SEO from '../components/seo';
import LogoImage from '../components/LogoImage';
import shuffle from 'lodash.shuffle';
import Typed from 'typed.js';

const SENTENCES = [
  'The Virtual Silicon Valley Of The Web3 Universe',
  'An Operating System For A Remote World',
  'A Real Life Role Playing Game For Building The Future',
  'Social Media x Freelancing x MMORPG',
  'A Cult With Your Best Interests At Heart',
  'A Decentralized Factory, a Web of Opportunity',
  'Sort of like LinkedIn, except not boring and nothing like LinkedIn',
  'This is not a coincidence',
  'Help us help you help the world',
  'A Massive Online Coordination Game'
];

const IndexPage = () => {
  const typingRef = React.useRef(null);
  
  React.useEffect(() => {
    if (!typingRef.current) return () => {};
    
    const typed = new Typed(typingRef.current, {
      strings: shuffle(SENTENCES),
      typeSpeed: 30,
      loop: true,
      backDelay: 1500,
      backSpeed: 10
    });
    
    return () => typed.destroy();
  }, [])
  
  
  return (
    <>
      <SEO title="Home" />
      <LogoImage />
      <div
        sx={{
          mt: 4,
          mb: 3,
          maxWidth: 500,
          textAlign: 'center',
          minHeight: 120,
          fontSize: [3, 4],
          textShadow: '0 0 15px rgba(0,0,0,0.9), 0 0 5px rgba(0,0,0,0.9)',
          whiteSpace: 'pre-line',
          fontFamily: 'heading',
          color: 'light',
        }}
      >
        <span ref={typingRef} />
      </div>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: ['100%', 'auto'],
          my: 3,
        }}
      >
        <Link to={'/learn'}>
          <Button text="LEARN" color="primary" />
        </Link>
        <Button
          text="PLAY"
          color="secondary"
          href="https://discord.gg/VYZPBnx"
          target="_blank"
        />
      </div>
    </>
  );
};

export default IndexPage;
