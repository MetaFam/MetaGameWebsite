/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Button from '../components/Button';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import { TextLink } from '../components/TextLink';

const IndexPage = () => (
  <div className="animated-links">
    <SEO title="Learn" />
    <TextLink
      href={"https://metagame.substack.com/p/in-search-of-commons-that-scale"}
    >
      I. In Search of Commons that Scale
    </TextLink>
      <TextLink
      href={"https://metagame.substack.com/p/metagame-octalysis-framework-3"}
    >
      II. On Gamification
    </TextLink>
    <TextLink
      href={"https://metagame.substack.com/p/the-coming-of-metagame"}
    >
      III. The Coming of MetaGame
    </TextLink>
    <TextLink
      href={"https://metagame.substack.com/p/srsly-tho-wtf-is-metagame"}
    >
      IV. WTF is MetaGame
    </TextLink>
    <TextLink
      href={"https://metagame.substack.com/p/narrative-1-a-decentralized-factory"}
    >
      V. The Decentralized Factory
    </TextLink>
    <TextLink
      href={"https://metagame.substack.com/p/narrative-2-the-web-of-opportunity"}
    >
      VI. The Web of Opportunity
    </TextLink>
    <TextLink
      href={"https://metagame.substack.com/p/the-way-of-web3-founding-freelancers"}
    >
      VII. The Way of Web3 Founders
    </TextLink>
    <TextLink
      href={"https://metagame.substack.com/p/how-to-become-a-founder-of-metagame"}
    >
      VIII. How To Become a Founder of MetaGame
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
