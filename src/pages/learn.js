/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react';
import Button from '../components/Button';
import SEO from '../components/seo';
import './learn.css'
import { Link } from 'gatsby';

const TextLink = ({ children, ...props }) => (
  <a
    className="mg-link"
    {...props}
    sx={{
      color: 'light',
      fontSize: [1, 2],
      mt: [3, 4],
      letterSpacing: 0.5
    }}
    target="_blank"
  >
    {children}
  </a>
);

const IndexPage = () => (
  <div className="animated-links">
    <SEO title="Learn" />
    <TextLink
      href={"https://metagame.substack.com/p/wtf-is-metagame"}
    >
        I. In Search of Commons that Scale
    </TextLink>
    <TextLink
      href={"https://metagame.substack.com/p/narrative-1-a-decentralized-factory"}   
    >
      II. The Coming of MetaGame
    </TextLink>
    <TextLink
      href={"https://metagame.substack.com/p/in-search-of-commons-that-scale"}
    >
      III. WTF is MetaGame
    </TextLink>
    <TextLink
      href={"https://metagame.substack.com/p/the-coming-of-metagame"}
    >
      IV. The Decentralized Factory
    </TextLink>
    <TextLink
      href={"https://metagame.substack.com/p/narrative-2-the-web-of-opportunity"}
    >
      V. The Web of Opportunity
    </TextLink>
    <TextLink
      href={"https://metagame.substack.com/p/how-to-become-a-founder-of-metagame"}
    >
      VI. How To Become a Founder
    </TextLink>
    <div
      sx={{
        mt: [4, 5],
        display: 'flex',
        justifyContent: 'center',
        width: ['100%', 'auto']
      }}
    >
      <Link
        to={'/'}
      >
        <Button
          text="BACK"
          color="light"
          sx={{
            px: 3,
            py: 2,
            fontSize: 0,
            mt: 4
          }}
        />
      </Link>
    </div>
  </div>
);

export default IndexPage;
