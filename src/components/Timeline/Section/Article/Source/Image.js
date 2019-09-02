import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Image = ({ alt, id }) => {
  const data = useStaticQuery(graphql`
    query {
      intercept: file(relativePath: { eq: "sources/intercept.jpg" }) {
        ...sourceImage
      }
      folha: file(relativePath: { eq: "sources/folha.jpg" }) {
        ...sourceImage
      }
      reinaldoazevedo: file(
        relativePath: { eq: "sources/reinaldoazevedo.jpg" }
      ) {
        ...sourceImage
      }
      veja: file(relativePath: { eq: "sources/veja.jpg" }) {
        ...sourceImage
      }
      elpais: file(relativePath: { eq: "sources/elpais.jpg" }) {
        ...sourceImage
      }
      uol: file(relativePath: { eq: "sources/uol.jpg" }) {
        ...sourceImage
      }
      buzzfeed: file(relativePath: { eq: "sources/buzzfeed.png" }) {
        ...sourceImage
      }
      glenn: file(relativePath: { eq: "sources/glenn.jpg" }) {
        ...sourceImage
      }
      apublica: file(relativePath: { eq: "sources/apublica.jpg" }) {
        ...sourceImage
      }
    }
  `);

  return <Img alt={alt} fluid={data[id].childImageSharp.fluid} />;
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Image;
