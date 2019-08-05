import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Image = ({ alt, id }) => {
  const data = useStaticQuery(graphql`
    query {
      intercept: file(relativePath: { eq: "sources/intercept.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 72) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      folha: file(relativePath: { eq: "sources/folha.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 72) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reinaldoazevedo: file(
        relativePath: { eq: "sources/reinaldoazevedo.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 72) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      veja: file(relativePath: { eq: "sources/veja.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 72) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      elpais: file(relativePath: { eq: "sources/elpais.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 72) {
            ...GatsbyImageSharpFluid
          }
        }
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
