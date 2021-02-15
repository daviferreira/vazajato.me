import React from 'react';

import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Timeline from '../components/Timeline';

const IndexPage = ({ location }) => (
  <Layout>
    <SEO />
    <Timeline location={location} />
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object,
};

export default IndexPage;
