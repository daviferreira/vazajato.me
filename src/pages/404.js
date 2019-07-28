import React from 'react';

import Layout from '../components/Layout';
import NotFound from '../components/NotFound';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound />
  </Layout>
);

export default NotFoundPage;
