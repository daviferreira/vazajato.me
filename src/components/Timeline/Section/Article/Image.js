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
      intercept8qyEHbPH7m7Fd9WKZGjeJZ: file(
        relativePath: { eq: "articles/intercept8qyEHbPH7m7Fd9WKZGjeJZ.jpg" }
      ) {
        ...articleImage
      }
      folhadu2AFswDG495LUVn4MiTr5: file(
        relativePath: { eq: "articles/folhadu2AFswDG495LUVn4MiTr5.jpg" }
      ) {
        ...articleImage
      }
      reinaldoazevedoxcFFzqhU6VtsBY18wDakMu: file(
        relativePath: {
          eq: "articles/reinaldoazevedoxcFFzqhU6VtsBY18wDakMu.jpg"
        }
      ) {
        ...articleImage
      }
      reinaldoazevedomCGQHzPgzQCDLQireNAX6Q: file(
        relativePath: {
          eq: "articles/reinaldoazevedomCGQHzPgzQCDLQireNAX6Q.jpg"
        }
      ) {
        ...articleImage
      }
      reinaldoazevedoqdUdTY4TbP4TJajG6UBAZV: file(
        relativePath: {
          eq: "articles/reinaldoazevedoqdUdTY4TbP4TJajG6UBAZV.jpg"
        }
      ) {
        ...articleImage
      }
      reinaldoazevedo5hD7u9svb4nEhz6kbSTYR2: file(
        relativePath: {
          eq: "articles/reinaldoazevedo5hD7u9svb4nEhz6kbSTYR2.jpg"
        }
      ) {
        ...articleImage
      }
      reinaldoazevedo88pABzBWUSA9Gxc9cn7zkv: file(
        relativePath: {
          eq: "articles/reinaldoazevedo88pABzBWUSA9Gxc9cn7zkv.jpg"
        }
      ) {
        ...articleImage
      }
      reinaldoazevedo69bhAsqTTHxBByzESriykq: file(
        relativePath: {
          eq: "articles/reinaldoazevedo69bhAsqTTHxBByzESriykq.jpg"
        }
      ) {
        ...articleImage
      }
      reinaldoazevedovCf9HJE6F9xu8h5v6Yiqnz: file(
        relativePath: {
          eq: "articles/reinaldoazevedovCf9HJE6F9xu8h5v6Yiqnz.jpg"
        }
      ) {
        ...articleImage
      }
      reinaldoazevedo63H3z4gPnrg2xGhuafDevk: file(
        relativePath: {
          eq: "articles/reinaldoazevedo63H3z4gPnrg2xGhuafDevk.jpg"
        }
      ) {
        ...articleImage
      }
      folhapkjbtqRgQupNz9Xying8yo: file(
        relativePath: { eq: "articles/folhapkjbtqRgQupNz9Xying8yo.jpg" }
      ) {
        ...articleImage
      }
      folhaj7aLmMbegqS2QvR7mjfbqa: file(
        relativePath: { eq: "articles/folhaj7aLmMbegqS2QvR7mjfbqa.jpg" }
      ) {
        ...articleImage
      }
      interceptNewsletter1: file(
        relativePath: { eq: "articles/interceptNewsletter1.jpg" }
      ) {
        ...articleImage
      }
      interceptNewsletter2: file(
        relativePath: { eq: "articles/interceptNewsletter2.jpg" }
      ) {
        ...articleImage
      }
      apublicadum6aiAJPLwJdZmskidKrQ: file(
        relativePath: { eq: "articles/apublicadum6aiAJPLwJdZmskidKrQ.jpg" }
      ) {
        ...articleImage
      }
      reinaldoazevedo2X3jHAiZL2TytdAujCxZS1: file(
        relativePath: {
          eq: "articles/reinaldoazevedo2X3jHAiZL2TytdAujCxZS1.jpg"
        }
      ) {
        ...articleImage
      }
      uolsbSehJUEFqwGz2dUMujeXG: file(
        relativePath: { eq: "articles/uolsbSehJUEFqwGz2dUMujeXG.jpg" }
      ) {
        ...articleImage
      }
      uolo89L93yf5yB3BQ8Yhw4PBh: file(
        relativePath: { eq: "articles/uolo89L93yf5yB3BQ8Yhw4PBh.jpg" }
      ) {
        ...articleImage
      }
      uoliscxswAvrqujAgmRL4jwgb: file(
        relativePath: { eq: "articles/uoliscxswAvrqujAgmRL4jwgb.jpg" }
      ) {
        ...articleImage
      }
      intercept8kpywU5zBs1RW86DMEmuDi: file(
        relativePath: { eq: "articles/intercept8kpywU5zBs1RW86DMEmuDi.jpg" }
      ) {
        ...articleImage
      }
      elpais8gbz362GfHaNMM96Q6YkHo: file(
        relativePath: { eq: "articles/elpais8gbz362GfHaNMM96Q6YkHo.jpg" }
      ) {
        ...articleImage
      }
      interceptw3pSfXkNgPuwJ57GNitk6w: file(
        relativePath: { eq: "articles/interceptw3pSfXkNgPuwJ57GNitk6w.jpg" }
      ) {
        ...articleImage
      }
      folhapVPNCBaVicy26D5P3jAkTx: file(
        relativePath: { eq: "articles/folhapVPNCBaVicy26D5P3jAkTx.jpg" }
      ) {
        ...articleImage
      }
      folhaur8KRR5xo4LZMBVQWEYoQb: file(
        relativePath: { eq: "articles/folhaur8KRR5xo4LZMBVQWEYoQb.jpg" }
      ) {
        ...articleImage
      }
      folhaqCcYJmm3c3eGXgHFq4UD7j: file(
        relativePath: { eq: "articles/folhaqCcYJmm3c3eGXgHFq4UD7j.jpg" }
      ) {
        ...articleImage
      }
      elpais35k8Nh4zY6TCZAtvcS3R36: file(
        relativePath: { eq: "articles/elpais35k8Nh4zY6TCZAtvcS3R36.jpg" }
      ) {
        ...articleImage
      }
      uol4ZocjxgDhHn6Y3DYojWx45: file(
        relativePath: { eq: "articles/uol4ZocjxgDhHn6Y3DYojWx45.jpg" }
      ) {
        ...articleImage
      }
      folha7YTgS29FptbTsB4FCozEdK: file(
        relativePath: { eq: "articles/folha7YTgS29FptbTsB4FCozEdK.jpg" }
      ) {
        ...articleImage
      }
      vejazaS42j31tcSgNkgptqRqs: file(
        relativePath: { eq: "articles/vejazaS42j31tcSgNkgptqRqs.jpg" }
      ) {
        ...articleImage
      }
      folha5y3T4o4KByRuS5NEKxCUAW: file(
        relativePath: { eq: "articles/folha5y3T4o4KByRuS5NEKxCUAW.jpg" }
      ) {
        ...articleImage
      }
      elpaistW2DoMfxasnrfF6HmWewfJ: file(
        relativePath: { eq: "articles/elpaistW2DoMfxasnrfF6HmWewfJ.jpg" }
      ) {
        ...articleImage
      }
      buzzfeeddz8BTbLYK6rD55eeizaKB4: file(
        relativePath: { eq: "articles/buzzfeeddz8BTbLYK6rD55eeizaKB4.jpg" }
      ) {
        ...articleImage
      }
      folhanyK3UhmzYNmSsbxdup79rV: file(
        relativePath: { eq: "articles/folhanyK3UhmzYNmSsbxdup79rV.jpg" }
      ) {
        ...articleImage
      }
      intercept2K4AwtdRm3sEQyUDUtDMYH: file(
        relativePath: { eq: "articles/intercept2K4AwtdRm3sEQyUDUtDMYH.jpg" }
      ) {
        ...articleImage
      }
      intercept6RtmSuwZYmksBY3Q5UXhQs: file(
        relativePath: { eq: "articles/intercept6RtmSuwZYmksBY3Q5UXhQs.jpg" }
      ) {
        ...articleImage
      }
      intercepti2XsSRGiAzpEBdnrri3VCc: file(
        relativePath: { eq: "articles/intercepti2XsSRGiAzpEBdnrri3VCc.jpg" }
      ) {
        ...articleImage
      }
      intercept65VSV2XLjBM3Sa8jmxA5xo: file(
        relativePath: { eq: "articles/intercept65VSV2XLjBM3Sa8jmxA5xo.jpg" }
      ) {
        ...articleImage
      }
      apublicaacegdb5gDvoN9Yxqk2ZTs5: file(
        relativePath: { eq: "articles/apublicaacegdb5gDvoN9Yxqk2ZTs5.jpg" }
      ) {
        ...articleImage
      }
      apublicacUF4CKemxSxLSb7swkcNa4: file(
        relativePath: { eq: "articles/apublicacUF4CKemxSxLSb7swkcNa4.jpg" }
      ) {
        ...articleImage
      }
      interceptvFKG1r8em5HDXYUAjNUmPR: file(
        relativePath: { eq: "articles/interceptvFKG1r8em5HDXYUAjNUmPR.jpg" }
      ) {
        ...articleImage
      }
      interceptscUbEvyfugff2YXR6XR6m3: file(
        relativePath: { eq: "articles/interceptscUbEvyfugff2YXR6XR6m3.jpg" }
      ) {
        ...articleImage
      }
      apublicaaAo1pExMUAMKQW5DW1hWVV: file(
        relativePath: { eq: "articles/apublicaaAo1pExMUAMKQW5DW1hWVV.jpg" }
      ) {
        ...articleImage
      }
      apublicas6SYVjZpEsij1B78vPxyi9: file(
        relativePath: { eq: "articles/apublicas6SYVjZpEsij1B78vPxyi9.jpg" }
      ) {
        ...articleImage
      }
      reinaldoazevedosR3R1JEPdnAZy34mBitECf: file(
        relativePath: {
          eq: "articles/reinaldoazevedosR3R1JEPdnAZy34mBitECf.jpg"
        }
      ) {
        ...articleImage
      }
      apublicauLJ7vNWDNnJ1VBBYGPh21Q: file(
        relativePath: { eq: "articles/apublicauLJ7vNWDNnJ1VBBYGPh21Q.jpg" }
      ) {
        ...articleImage
      }
      interceptpjdgk6LWBtqoz57v3KKuf6: file(
        relativePath: { eq: "articles/interceptpjdgk6LWBtqoz57v3KKuf6.jpg" }
      ) {
        ...articleImage
      }
      interceptvCciqRjoRvir1MbkwHVKYs: file(
        relativePath: { eq: "articles/interceptvCciqRjoRvir1MbkwHVKYs.jpg" }
      ) {
        ...articleImage
      }
      apublicaoFmqZ21arDRkUpnxCi2Tkr: file(
        relativePath: { eq: "articles/apublicaoFmqZ21arDRkUpnxCi2Tkr.jpg" }
      ) {
        ...articleImage
      }
      interceptsd4QqJfxeoSjnqerwZWVfD: file(
        relativePath: { eq: "articles/interceptsd4QqJfxeoSjnqerwZWVfD.jpg" }
      ) {
        ...articleImage
      }
      uolxbFLkbp9SDe4dvMiLN2yFj: file(
        relativePath: { eq: "articles/uolxbFLkbp9SDe4dvMiLN2yFj.jpg" }
      ) {
        ...articleImage
      }
      reinaldoazevedob3Je4DxXgpmX2tJ8y1ZDCm: file(
        relativePath: {
          eq: "articles/reinaldoazevedob3Je4DxXgpmX2tJ8y1ZDCm.jpg"
        }
      ) {
        ...articleImage
      }
      elpais4kYrXYsKyWWpN8cyPWtMsD: file(
        relativePath: { eq: "articles/elpais4kYrXYsKyWWpN8cyPWtMsD.jpg" }
      ) {
        ...articleImage
      }
      elpaiscuoeR7wuTSyrHoeeSWRA6B: file(
        relativePath: { eq: "articles/elpaiscuoeR7wuTSyrHoeeSWRA6B.jpg" }
      ) {
        ...articleImage
      }
      apublicarENeMsd5NhyNjQ2CHoEbND: file(
        relativePath: { eq: "articles/apublicarENeMsd5NhyNjQ2CHoEbND.jpg" }
      ) {
        ...articleImage
      }
      cnn7eeiqjwAiFvjRJxXoTDVp6: file(
        relativePath: { eq: "articles/cnn7eeiqjwAiFvjRJxXoTDVp6.jpg" }
      ) {
        ...articleImage
      }
      conjurjoj4LqftuMj7KdwtzdTMbs: file(
        relativePath: { eq: "articles/conjurjoj4LqftuMj7KdwtzdTMbs.jpg" }
      ) {
        ...articleImage
      }
      vejaoXyxPB1RgRGHEqTdC65Wdx: file(
        relativePath: { eq: "articles/vejaoXyxPB1RgRGHEqTdC65Wdx.jpg" }
      ) {
        ...articleImage
      }
      uolfSKCnZggyuNAwoxkiXuzsm: file(
        relativePath: { eq: "articles/uolfSKCnZggyuNAwoxkiXuzsm.jpg" }
      ) {
        ...articleImage
      }
      uolpjXvThf2NCXHyCheNxV8Hk: file(
        relativePath: { eq: "articles/uolpjXvThf2NCXHyCheNxV8Hk.jpg" }
      ) {
        ...articleImage
      }
      monicabergamo4bonSvGppcvghZCHtX3FfG: file(
        relativePath: { eq: "articles/monicabergamo4bonSvGppcvghZCHtX3FfG.jpg" }
      ) {
        ...articleImage
      }
      forumaMG3ywPx95XCc3RUBkFJSX: file(
        relativePath: { eq: "articles/forumaMG3ywPx95XCc3RUBkFJSX.jpg" }
      ) {
        ...articleImage
      }
      conjurrRMJ5PWsQdic1ZwogfdcAV: file(
        relativePath: { eq: "articles/conjurrRMJ5PWsQdic1ZwogfdcAV.jpg" }
      ) {
        ...articleImage
      }
      estadaosnvC7eExfnoVTH6bbLTeou: file(
        relativePath: { eq: "articles/estadaosnvC7eExfnoVTH6bbLTeou.jpg" }
      ) {
        ...articleImage
      }
      conjuroLwhoqrMnfJQe1aM3MPhBB: file(
        relativePath: { eq: "articles/conjuroLwhoqrMnfJQe1aM3MPhBB.jpg" }
      ) {
        ...articleImage
      }
      uolck8VKGKyrKXSEhxMAprrSU: file(
        relativePath: { eq: "articles/uolck8VKGKyrKXSEhxMAprrSU.jpg" }
      ) {
        ...articleImage
      }
      migalhas3QaZFiD7RHWqGfBRWaXEcR: file(
        relativePath: { eq: "articles/migalhas3QaZFiD7RHWqGfBRWaXEcR.jpg" }
      ) {
        ...articleImage
      }
      conjureEnGx5fZo35x7VX9fmjnJn: file(
        relativePath: { eq: "articles/conjureEnGx5fZo35x7VX9fmjnJn.jpg" }
      ) {
        ...articleImage
      }
      uolpPu51k8ScWNU2FFaavtczc: file(
        relativePath: { eq: "articles/uolpPu51k8ScWNU2FFaavtczc.jpg" }
      ) {
        ...articleImage
      }
      veja6BDbd2wxeF954hvhYaGPxQ: file(
        relativePath: { eq: "articles/veja6BDbd2wxeF954hvhYaGPxQ.jpg" }
      ) {
        ...articleImage
      }
      uolcLwcBH7bJ3nHye1QPsmh6X: file(
        relativePath: { eq: "articles/uolcLwcBH7bJ3nHye1QPsmh6X.jpg" }
      ) {
        ...articleImage
      }
      folhaciFg2ZYWy9goh1E97Uq5C5: file(
        relativePath: { eq: "articles/folhaciFg2ZYWy9goh1E97Uq5C5.jpg" }
      ) {
        ...articleImage
      }
      conjur4MFU1ivuZdYYuC1vdS4Fvz: file(
        relativePath: { eq: "articles/conjur4MFU1ivuZdYYuC1vdS4Fvz.jpg" }
      ) {
        ...articleImage
      }
      monicabergamoicZLs8rFGaM3CuMYn58P3A: file(
        relativePath: { eq: "articles/monicabergamoicZLs8rFGaM3CuMYn58P3A.jpg" }
      ) {
        ...articleImage
      }
      elpais6uXzaUy3xCFbbytgL5u4yS: file(
        relativePath: { eq: "articles/elpais6uXzaUy3xCFbbytgL5u4yS.jpg" }
      ) {
        ...articleImage
      }
      conjuro5BruJYDiskRrme8WvMcJs: file(
        relativePath: { eq: "articles/conjuro5BruJYDiskRrme8WvMcJs.jpg" }
      ) {
        ...articleImage
      }
      uoltRWyeig89qoPtDzAfoFiQp: file(
        relativePath: { eq: "articles/uoltRWyeig89qoPtDzAfoFiQp.jpg" }
      ) {
        ...articleImage
      }
      cnnjUp5YYRM4C47oNVuXW82YJ: file(
        relativePath: { eq: "articles/cnnjUp5YYRM4C47oNVuXW82YJ.jpg" }
      ) {
        ...articleImage
      }
      conjurayfASrde3ydx3xEJtTYmVn: file(
        relativePath: { eq: "articles/conjurayfASrde3ydx3xEJtTYmVn.jpg" }
      ) {
        ...articleImage
      }
      cartacapitaligm1mqaFhZ1vU8hGCWNVxC: file(
        relativePath: { eq: "articles/cartacapitaligm1mqaFhZ1vU8hGCWNVxC.jpg" }
      ) {
        ...articleImage
      }
      metropoles3BRhvxuSXH6QqoSbMQYXaK: file(
        relativePath: { eq: "articles/metropoles3BRhvxuSXH6QqoSbMQYXaK.jpg" }
      ) {
        ...articleImage
      }
      forumagBz4UQTBddxhoYce3uwkZ: file(
        relativePath: { eq: "articles/forumagBz4UQTBddxhoYce3uwkZ.jpg" }
      ) {
        ...articleImage
      }
      cartacapital1drtqwkCVdz1U8su13w5Ln: file(
        relativePath: { eq: "articles/cartacapital1drtqwkCVdz1U8su13w5Ln.jpg" }
      ) {
        ...articleImage
      }
      conjurjKnLHMnwuijemY7vWbfgT9: file(
        relativePath: { eq: "articles/conjurjKnLHMnwuijemY7vWbfgT9.jpg" }
      ) {
        ...articleImage
      }
      uolwVri86hCipe6ctDG4uryEs: file(
        relativePath: { eq: "articles/uolwVri86hCipe6ctDG4uryEs.jpg" }
      ) {
        ...articleImage
      }
      jamilchade6ns9kdDAUhdexfBWsjQxLD: file(
        relativePath: { eq: "articles/jamilchade6ns9kdDAUhdexfBWsjQxLD.jpg" }
      ) {
        ...articleImage
      }
      conjur765MRi5AL1StHUKamqawdk: file(
        relativePath: { eq: "articles/conjur765MRi5AL1StHUKamqawdk.jpg" }
      ) {
        ...articleImage
      }
      monicabergamoiUgYBwvACqNoW42d9FeW6n: file(
        relativePath: { eq: "articles/monicabergamoiUgYBwvACqNoW42d9FeW6n.jpg" }
      ) {
        ...articleImage
      }
      uold8ycKsGTgKU1XZvGVp91bd: file(
        relativePath: { eq: "articles/uold8ycKsGTgKU1XZvGVp91bd.jpg" }
      ) {
        ...articleImage
      }
      conjuriMRKAN4B78YeFqw5UWRNZV: file(
        relativePath: { eq: "articles/conjuriMRKAN4B78YeFqw5UWRNZV.jpg" }
      ) {
        ...articleImage
      }
      uolpdJvrghrqxyar8Jm33hdHW: file(
        relativePath: { eq: "articles/uolpdJvrghrqxyar8Jm33hdHW.jpg" }
      ) {
        ...articleImage
      }
      conjureMFC4bMTG6VkTV3rrMyTcY: file(
        relativePath: { eq: "articles/conjureMFC4bMTG6VkTV3rrMyTcY.jpg" }
      ) {
        ...articleImage
      }
      uol6YUfBKA4L1rURubnMi2zEX: file(
        relativePath: { eq: "articles/uol6YUfBKA4L1rURubnMi2zEX.jpg" }
      ) {
        ...articleImage
      }
      conjurmJyVumbcRXcaGSaonSt78j: file(
        relativePath: { eq: "articles/conjurmJyVumbcRXcaGSaonSt78j.jpg" }
      ) {
        ...articleImage
      }
      cartacapital2FRBbYUid7ejcwdvVBKaPN: file(
        relativePath: { eq: "articles/cartacapital2FRBbYUid7ejcwdvVBKaPN.jpg" }
      ) {
        ...articleImage
      }
      conjurv85y58pzM716cS8rxfbqKP: file(
        relativePath: { eq: "articles/conjurv85y58pzM716cS8rxfbqKP.jpg" }
      ) {
        ...articleImage
      }
      intercept8gVvzAndSd4z2spETJxVvd: file(
        relativePath: { eq: "articles/intercept8gVvzAndSd4z2spETJxVvd.jpg" }
      ) {
        ...articleImage
      }
      forumowyVayRAWaK3zqsv9nVrZC: file(
        relativePath: { eq: "articles/forumowyVayRAWaK3zqsv9nVrZC.jpg" }
      ) {
        ...articleImage
      }
      uoljGVvPwX2mqZWUGbajZids5: file(
        relativePath: { eq: "articles/uoljGVvPwX2mqZWUGbajZids5.jpg" }
      ) {
        ...articleImage
      }
      cnnkdfBkiYLZ3X8AFWtFfCtbo: file(
        relativePath: { eq: "articles/cnnkdfBkiYLZ3X8AFWtFfCtbo.jpg" }
      ) {
        ...articleImage
      }
      jamilchadecZVBxiKTirTx42hE2yf6q2: file(
        relativePath: { eq: "articles/jamilchadecZVBxiKTirTx42hE2yf6q2.jpg" }
      ) {
        ...articleImage
      }
      conjurbQEQevzxNk4GTkjnzrvmeW: file(
        relativePath: { eq: "articles/conjurbQEQevzxNk4GTkjnzrvmeW.jpg" }
      ) {
        ...articleImage
      }
      conjura9YoKEtjzsCyTdAjFywm9Q: file(
        relativePath: { eq: "articles/conjura9YoKEtjzsCyTdAjFywm9Q.jpg" }
      ) {
        ...articleImage
      }
      conjur15GYeoXYK5jkc94ruCrUtv: file(
        relativePath: { eq: "articles/conjur15GYeoXYK5jkc94ruCrUtv.jpg" }
      ) {
        ...articleImage
      }
      monicabergamooyW5YxAdm7Knr8tRAiaYDt: file(
        relativePath: { eq: "articles/monicabergamooyW5YxAdm7Knr8tRAiaYDt.jpg" }
      ) {
        ...articleImage
      }
      apublicar68ujpPic5zFUVXZNh5uFi: file(
        relativePath: { eq: "articles/apublicar68ujpPic5zFUVXZNh5uFi.jpg" }
      ) {
        ...articleImage
      }
      conjurowhvKjQ48wVRt4veaMbhjm: file(
        relativePath: { eq: "articles/conjurowhvKjQ48wVRt4veaMbhjm.jpg" }
      ) {
        ...articleImage
      }
      uol1Jx57aFcQk6nzHY7Af7LZN: file(
        relativePath: { eq: "articles/uol1Jx57aFcQk6nzHY7Af7LZN.jpg" }
      ) {
        ...articleImage
      }
      conjur2RMvbTCrPmXqhyysQAAT9F: file(
        relativePath: { eq: "articles/conjur2RMvbTCrPmXqhyysQAAT9F.jpg" }
      ) {
        ...articleImage
      }
      # NEW IMAGE PLACEHOLDER
    }
  `);

  return <Img alt={alt} fluid={data[id].childImageSharp.fluid} />;
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Image;
