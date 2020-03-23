/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Styled } from 'theme-ui';
import { Global } from '@emotion/core'
import "normalize.css"
import Header from './header';
import Footer from './footer';
import "./Mandala/mandala.css"
import { setup } from "./Mandala/mandala"
import Background from './Background';

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
  
  useEffect(() => {
      setup();
  }, []);

  return (
    <Styled.root>
      <Global
        styles={theme => ({
          body: {
            backgroundColor: theme.colors.background,
            overflow: 'hidden',
            cursor: 'crosshair',
            userSelect: 'none'
          }
        })}
      />
      <div {...{ id: 'wrapper', className: 'wrapper' }}>
        <Background>
          <Header title={data.site.siteMetadata.title} {...props} />
          <main
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              px: 3,
            }}
          >
            {children}
          </main>
          <Footer />
        </Background>
      </div>
    </Styled.root>
  );
};

export default Layout;
