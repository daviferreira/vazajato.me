import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
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
      monicabergamo: file(relativePath: { eq: "sources/monicabergamo.jpg" }) {
        ...sourceImage
      }
      cnn: file(relativePath: { eq: "sources/cnn.jpg" }) {
        ...sourceImage
      }
      conjur: file(relativePath: { eq: "sources/conjur.png" }) {
        ...sourceImage
      }
      forum: file(relativePath: { eq: "sources/forum.png" }) {
        ...sourceImage
      }
      estadao: file(relativePath: { eq: "sources/estadao.jpg" }) {
        ...sourceImage
      }
      migalhas: file(relativePath: { eq: "sources/migalhas.jpg" }) {
        ...sourceImage
      }
      jamilchade: file(relativePath: { eq: "sources/jamilchade.jpg" }) {
        ...sourceImage
      }
      cartacapital: file(relativePath: { eq: "sources/cartacapital.jpg" }) {
        ...sourceImage
      }
      metropoles: file(relativePath: { eq: "sources/metropoles.jpg" }) {
        ...sourceImage
      }
      jota: file(relativePath: { eq: "sources/jota.jpg" }) {
        ...sourceImage
      }
      piaui: file(relativePath: { eq: "sources/piaui.jpg" }) {
        ...sourceImage
      }
    }
  `);

  return (
    <GatsbyImage image={data[id].childImageSharp.gatsbyImageData} alt={alt} />
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Image;
