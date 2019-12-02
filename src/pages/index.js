import React from 'react';
import { Styled } from 'theme-ui';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Styled.p>A Massive Online Coordination Game.</Styled.p>
  </Layout>
);

export default IndexPage;
