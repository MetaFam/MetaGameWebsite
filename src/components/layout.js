/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Styled } from 'theme-ui';
import Header from './header';

const Layout = ({ children, ...props }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log({ data });
  return (
    <Styled.root>
      <Header title={data.site.siteMetadata.title} {...props} />
      <div>
        <div
          sx={{
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
          }}
        >
          {children}
        </div>
      </div>
    </Styled.root>
  );
};

export default Layout;
