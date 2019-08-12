import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Image = ({ alt, id }) => {
  const data = useStaticQuery(graphql`
    query {
      intercept1: file(relativePath: { eq: "articles/intercept-1.jpg" }) {
        ...articleImage
      }
      intercept2: file(relativePath: { eq: "articles/intercept-2.jpg" }) {
        ...articleImage
      }
      intercept3: file(relativePath: { eq: "articles/intercept-3.jpg" }) {
        ...articleImage
      }
      intercept4: file(relativePath: { eq: "articles/intercept-4.jpg" }) {
        ...articleImage
      }
      intercept5: file(relativePath: { eq: "articles/intercept-5.jpg" }) {
        ...articleImage
      }
      intercept6: file(relativePath: { eq: "articles/intercept-6.jpg" }) {
        ...articleImage
      }
      intercept7: file(relativePath: { eq: "articles/intercept-7.jpg" }) {
        ...articleImage
      }
      intercept8: file(relativePath: { eq: "articles/intercept-8.jpg" }) {
        ...articleImage
      }
      intercept9: file(relativePath: { eq: "articles/intercept-9.jpg" }) {
        ...articleImage
      }
      intercept10: file(relativePath: { eq: "articles/intercept-10.jpg" }) {
        ...articleImage
      }
      intercept11: file(relativePath: { eq: "articles/intercept-11.jpg" }) {
        ...articleImage
      }
      intercept12: file(relativePath: { eq: "articles/intercept-12.jpg" }) {
        ...articleImage
      }
      intercept13: file(relativePath: { eq: "articles/intercept-13.jpg" }) {
        ...articleImage
      }
      intercept14: file(relativePath: { eq: "articles/intercept-14.jpg" }) {
        ...articleImage
      }
      intercept1mes: file(relativePath: { eq: "articles/intercept-1mes.jpg" }) {
        ...articleImage
      }
      interceptCheck: file(
        relativePath: { eq: "articles/intercept-check.jpg" }
      ) {
        ...articleImage
      }
      folha1: file(relativePath: { eq: "articles/folha-1.jpg" }) {
        ...articleImage
      }
      folha2: file(relativePath: { eq: "articles/folha-2.jpg" }) {
        ...articleImage
      }
      folha3: file(relativePath: { eq: "articles/folha-3.jpg" }) {
        ...articleImage
      }
      folha4: file(relativePath: { eq: "articles/folha-3.jpg" }) {
        ...articleImage
      }
      folha5: file(relativePath: { eq: "articles/folha-5.jpg" }) {
        ...articleImage
      }
      folha6: file(relativePath: { eq: "articles/folha-6.jpg" }) {
        ...articleImage
      }
      folha7: file(relativePath: { eq: "articles/folha-7.jpg" }) {
        ...articleImage
      }
      folha8: file(relativePath: { eq: "articles/folha-8.jpg" }) {
        ...articleImage
      }
      folha9: file(relativePath: { eq: "articles/folha-9.jpg" }) {
        ...articleImage
      }
      folha10: file(relativePath: { eq: "articles/folha-10.jpg" }) {
        ...articleImage
      }
      folha11: file(relativePath: { eq: "articles/folha-11.jpg" }) {
        ...articleImage
      }
      folha12: file(relativePath: { eq: "articles/folha-12.jpg" }) {
        ...articleImage
      }
      folha13: file(relativePath: { eq: "articles/folha-13.jpg" }) {
        ...articleImage
      }
      folha14: file(relativePath: { eq: "articles/folha-14.jpg" }) {
        ...articleImage
      }
      reinaldoazevedo1: file(
        relativePath: { eq: "articles/reinaldoazevedo-1.jpg" }
      ) {
        ...articleImage
      }
      reinaldoazevedo2: file(
        relativePath: { eq: "articles/reinaldoazevedo-2.jpg" }
      ) {
        ...articleImage
      }
      reinaldoazevedo3: file(
        relativePath: { eq: "articles/reinaldoazevedo-3.jpg" }
      ) {
        ...articleImage
      }
      reinaldoazevedo4: file(
        relativePath: { eq: "articles/reinaldoazevedo-4.jpg" }
      ) {
        ...articleImage
      }
      reinaldoazevedo5: file(
        relativePath: { eq: "articles/reinaldoazevedo-5.jpg" }
      ) {
        ...articleImage
      }
      reinaldoazevedo6: file(
        relativePath: { eq: "articles/reinaldoazevedo-6.jpg" }
      ) {
        ...articleImage
      }
      reinaldoazevedo7: file(
        relativePath: { eq: "articles/reinaldoazevedo-7.jpg" }
      ) {
        ...articleImage
      }
      veja1: file(relativePath: { eq: "articles/veja-1.jpg" }) {
        ...articleImage
      }
      veja2: file(relativePath: { eq: "articles/veja-2.jpg" }) {
        ...articleImage
      }
      veja3: file(relativePath: { eq: "articles/veja-3.jpg" }) {
        ...articleImage
      }
      veja4: file(relativePath: { eq: "articles/veja-4.jpg" }) {
        ...articleImage
      }
      elpais1: file(relativePath: { eq: "articles/elpais-1.jpg" }) {
        ...articleImage
      }
      elpais2: file(relativePath: { eq: "articles/elpais-2.jpg" }) {
        ...articleImage
      }
      uol1: file(relativePath: { eq: "articles/uol-1.jpg" }) {
        ...articleImage
      }
      uol2: file(relativePath: { eq: "articles/uol-2.jpg" }) {
        ...articleImage
      }
      uol3: file(relativePath: { eq: "articles/uol-3.jpg" }) {
        ...articleImage
      }
      sUtjRt4SHw6UANc5Xekyxj: file(
        relativePath: { eq: "articles/sUtjRt4SHw6UANc5Xekyxj.jpg" }
      ) {
        ...articleImage
      }
      pbY8izLdiWXV4UVfXXozRD: file(
        relativePath: { eq: "articles/pbY8izLdiWXV4UVfXXozRD.jpg" }
      ) {
        ...articleImage
      }
      folhagjGhM559fYT3DZLQH5zCJE: file(
        relativePath: { eq: "articles/folhagjGhM559fYT3DZLQH5zCJE.jpg" }
      ) {
        ...articleImage
      }
      intercepthjkJ9pVmU87udJsQqHLN4h: file(
        relativePath: { eq: "articles/intercepthjkJ9pVmU87udJsQqHLN4h.jpg" }
      ) {
        ...articleImage
      }
      elpaisdYKiP47dAgKWAPwgVnrkRW: file(
        relativePath: { eq: "articles/elpaisdYKiP47dAgKWAPwgVnrkRW.jpg" }
      ) {
        ...articleImage
      }
      interceptv7Jnm6r5Wb1ZCK5o6y9GQa: file(
        relativePath: { eq: "articles/interceptv7Jnm6r5Wb1ZCK5o6y9GQa.jpg" }
      ) {
        ...articleImage
      }
      intercept9ZAr2r9Tmqq44axPuPLwPV: file(
        relativePath: { eq: "articles/intercept9ZAr2r9Tmqq44axPuPLwPV.jpg" }
      ) {
        ...articleImage
      }
      interceptptV24pHjj5Cp2UGXQRMWwg: file(
        relativePath: { eq: "articles/interceptptV24pHjj5Cp2UGXQRMWwg.jpg" }
      ) {
        ...articleImage
      }
      interceptrEvL48gVcvB4mEuS9uqpgv: file(relativePath: { eq: "articles/interceptrEvL48gVcvB4mEuS9uqpgv.jpg" }) {
        ...articleImage
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
