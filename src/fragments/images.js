import { graphql } from 'gatsby';

export const images = graphql`
  fragment articleImage on File {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }

  fragment sourceImage on File {
    childImageSharp {
      fluid(maxWidth: 72) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
