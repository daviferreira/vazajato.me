import React from 'react';

import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Timeline from '../components/Timeline/List';

const TimelinePage = ({
  pageContext: { articles, source, topic },
  location,
}) => (
  <Layout>
    <SEO />
    <Timeline
      articles={articles}
      location={location}
      source={source}
      topic={topic}
    />
  </Layout>
);

TimelinePage.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default TimelinePage;
