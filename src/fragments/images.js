import { graphql } from 'gatsby';

export const images = graphql`
  fragment articleImage on File {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  fragment sourceImage on File {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
`;
