import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const Image = ({ alt, id }) => {
  const data = useStaticQuery(graphql`
    query {
      intercept1: file(relativePath: { eq: "articles/intercept-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      intercept2: file(relativePath: { eq: "articles/intercept-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      intercept3: file(relativePath: { eq: "articles/intercept-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      veja1: file(relativePath: { eq: "articles/veja-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      folha1: file(relativePath: { eq: "articles/folha-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reinaldoazevedo1: file(
        relativePath: { eq: "articles/reinaldoazevedo-1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img alt={alt} fluid={data[id].childImageSharp.fluid} />
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Image
