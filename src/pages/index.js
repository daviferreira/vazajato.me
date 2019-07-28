import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Timeline from '../components/Timeline';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Timeline />
  </Layout>
);

export default IndexPage;
