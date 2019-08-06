import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Image = ({ alt, id }) => {
  const data = useStaticQuery(graphql`
    query {
      intercept1: file(relativePath: { eq: "articles/intercept-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      intercept2: file(relativePath: { eq: "articles/intercept-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      intercept3: file(relativePath: { eq: "articles/intercept-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      intercept4: file(relativePath: { eq: "articles/intercept-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      intercept5: file(relativePath: { eq: "articles/intercept-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      intercept6: file(relativePath: { eq: "articles/intercept-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      intercept7: file(relativePath: { eq: "articles/intercept-7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      intercept8: file(relativePath: { eq: "articles/intercept-8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      intercept9: file(relativePath: { eq: "articles/intercept-9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      intercept10: file(relativePath: { eq: "articles/intercept-10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      intercept11: file(relativePath: { eq: "articles/intercept-11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      intercept12: file(relativePath: { eq: "articles/intercept-12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      intercept13: file(relativePath: { eq: "articles/intercept-13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      intercept14: file(relativePath: { eq: "articles/intercept-14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      intercept1mes: file(relativePath: { eq: "articles/intercept-1mes.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      interceptCheck: file(relativePath: { eq: "articles/intercept-check.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      folha1: file(relativePath: { eq: "articles/folha-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      folha2: file(relativePath: { eq: "articles/folha-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      folha3: file(relativePath: { eq: "articles/folha-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      folha4: file(relativePath: { eq: "articles/folha-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      folha5: file(relativePath: { eq: "articles/folha-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      folha6: file(relativePath: { eq: "articles/folha-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      folha7: file(relativePath: { eq: "articles/folha-7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      folha8: file(relativePath: { eq: "articles/folha-8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      folha9: file(relativePath: { eq: "articles/folha-9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      folha10: file(relativePath: { eq: "articles/folha-10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      folha11: file(relativePath: { eq: "articles/folha-11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      folha12: file(relativePath: { eq: "articles/folha-12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      folha13: file(relativePath: { eq: "articles/folha-13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      reinaldoazevedo1: file(
        relativePath: { eq: "articles/reinaldoazevedo-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      reinaldoazevedo2: file(
        relativePath: { eq: "articles/reinaldoazevedo-2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      reinaldoazevedo3: file(
        relativePath: { eq: "articles/reinaldoazevedo-3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      reinaldoazevedo4: file(
        relativePath: { eq: "articles/reinaldoazevedo-4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      reinaldoazevedo5: file(
        relativePath: { eq: "articles/reinaldoazevedo-5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      reinaldoazevedo6: file(
        relativePath: { eq: "articles/reinaldoazevedo-6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      reinaldoazevedo7: file(
        relativePath: { eq: "articles/reinaldoazevedo-7.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      veja1: file(relativePath: { eq: "articles/veja-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      veja2: file(relativePath: { eq: "articles/veja-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      veja3: file(relativePath: { eq: "articles/veja-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      veja4: file(relativePath: { eq: "articles/veja-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      elpais1: file(relativePath: { eq: "articles/elpais-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      elpais2: file(relativePath: { eq: "articles/elpais-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
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
