/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, path, title }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `);

  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `https://www.vazajato.me/images/telegram.jpg`,
        },
        {
          property: `og:image:height`,
          content: 675,
        },
        {
          property: `og:image:width`,
          content: 1200,
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}${path}`,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  path: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  path: PropTypes.string,
  title: PropTypes.string,
};

export default SEO;
