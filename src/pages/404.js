import React from 'react';
import { Styled } from 'theme-ui';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Styled.h1>NOT FOUND</Styled.h1>
    <Styled.p>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Styled.p>
  </Layout>
);

export default NotFoundPage;
