import React from 'react';

import PropTypes from 'prop-types';
import slugify from 'slugify';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Timeline from '../components/Timeline/List';

import sources from '../data/sources.json';

const TimelinePage = ({
  pageContext: { articles, source, topic },
  location,
}) => {
  let title;
  let description;
  let path;

  if (source) {
    const name = sources[source].name;
    title = `Veículo: ${name} | Linha do tempo da #VazaJato`;
    description = `Página listando todas as reportagens da #VazaJato publicadas via ${name}`;
    path = `/veiculos/${source}`;
  } else if (topic) {
    title = `Tópico: ${topic} | Linha do tempo da #VazaJato`;
    description = `Página listando todas as reportagens da #VazaJato sobre ${topic}`;
    path = `/topicos/${slugify(topic).toLowerCase().trim()}`;
  }

  return (
    <Layout>
      <SEO description={description} path={path} title={title} />
      <Timeline
        articles={articles}
        location={location}
        source={source}
        topic={topic}
      />
    </Layout>
  );
};

TimelinePage.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default TimelinePage;
