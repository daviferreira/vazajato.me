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
      interceptrEvL48gVcvB4mEuS9uqpgv: file(
        relativePath: { eq: "articles/interceptrEvL48gVcvB4mEuS9uqpgv.jpg" }
      ) {
        ...articleImage
      }
      buzzfeedqREdmimo5GcQyyqxv2FP1e: file(
        relativePath: { eq: "articles/buzzfeedqREdmimo5GcQyyqxv2FP1e.jpg" }
      ) {
        ...articleImage
      }
      uolfz849vs3owzVtNjtbm6Vg9: file(
        relativePath: { eq: "articles/uolfz849vs3owzVtNjtbm6Vg9.jpg" }
      ) {
        ...articleImage
      }
      uolpPZhKEr1ywj8cMcwA8jVef: file(
        relativePath: { eq: "articles/uolpPZhKEr1ywj8cMcwA8jVef.jpg" }
      ) {
        ...articleImage
      }
      folhahY75VdmXESdLFp9o28WGkP: file(
        relativePath: { eq: "articles/folhahY75VdmXESdLFp9o28WGkP.jpg" }
      ) {
        ...articleImage
      }
      folhasvVVDz5bDGybZqTr9QcAPC: file(
        relativePath: { eq: "articles/folhasvVVDz5bDGybZqTr9QcAPC.jpg" }
      ) {
        ...articleImage
      }
      intercept2bSAP51ucevpq3MSwbZTLy: file(
        relativePath: { eq: "articles/intercept2bSAP51ucevpq3MSwbZTLy.jpg" }
      ) {
        ...articleImage
      }
      folha3TQuDLeVScQtbQw3ngdJqH: file(
        relativePath: { eq: "articles/folha3TQuDLeVScQtbQw3ngdJqH.jpg" }
      ) {
        ...articleImage
      }
      glennjYRUC1horrtheHRMgxDRhU: file(
        relativePath: { eq: "articles/glennjYRUC1horrtheHRMgxDRhU.jpg" }
      ) {
        ...articleImage
      }
      elpaiskM1WCbXpzThDRC6VR6RdyR: file(
        relativePath: { eq: "articles/elpaiskM1WCbXpzThDRC6VR6RdyR.jpg" }
      ) {
        ...articleImage
      }
      folhatpT1KVGMAW7gyt3sf4Ys9S: file(
        relativePath: { eq: "articles/folhatpT1KVGMAW7gyt3sf4Ys9S.jpg" }
      ) {
        ...articleImage
      }
      interceptqjivZuopgupmze6iredVwX: file(
        relativePath: { eq: "articles/interceptqjivZuopgupmze6iredVwX.jpg" }
      ) {
        ...articleImage
      }
      uolo9SnGN3oQXTP6aB4P93LHt: file(
        relativePath: { eq: "articles/uolo9SnGN3oQXTP6aB4P93LHt.jpg" }
      ) {
        ...articleImage
      }
      folhaeRqn5gvUHvJ93mwPj8ZR59: file(
        relativePath: { eq: "articles/folhaeRqn5gvUHvJ93mwPj8ZR59.jpg" }
      ) {
        ...articleImage
      }
      intercept2dJLphMAbxfYDphYcnM8Ku: file(
        relativePath: { eq: "articles/intercept2dJLphMAbxfYDphYcnM8Ku.jpg" }
      ) {
        ...articleImage
      }
      apublicapa7UkeqwXfXDMpLZr44owV: file(
        relativePath: { eq: "articles/apublicapa7UkeqwXfXDMpLZr44owV.jpg" }
      ) {
        ...articleImage
      }
      apublicamKgfyfTdBemGqofa2EL4Pa: file(
        relativePath: { eq: "articles/apublicamKgfyfTdBemGqofa2EL4Pa.jpg" }
      ) {
        ...articleImage
      }
      interceptnmgrMzbvbCBir3UHcAT1gc: file(
        relativePath: { eq: "articles/interceptnmgrMzbvbCBir3UHcAT1gc.jpg" }
      ) {
        ...articleImage
      }
      elpaisfeDHHv53CwrnnjHRzRdytA: file(
        relativePath: { eq: "articles/elpaisfeDHHv53CwrnnjHRzRdytA.jpg" }
      ) {
        ...articleImage
      }
      folha3eT61K1qvybdoC5PVMmvPp: file(
        relativePath: { eq: "articles/folha3eT61K1qvybdoC5PVMmvPp.jpg" }
      ) {
        ...articleImage
      }
      folha5HEaSaLP9PJSJuVSp8yZhh: file(
        relativePath: { eq: "articles/folha5HEaSaLP9PJSJuVSp8yZhh.jpg" }
      ) {
        ...articleImage
      }
      folha2angFaw5qGkbozPwDMXuum: file(
        relativePath: { eq: "articles/folha2angFaw5qGkbozPwDMXuum.jpg" }
      ) {
        ...articleImage
      }
      uol2UnsQxALYaggWgfATDEb2i: file(
        relativePath: { eq: "articles/uol2UnsQxALYaggWgfATDEb2i.jpg" }
      ) {
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
