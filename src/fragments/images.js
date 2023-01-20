import { graphql } from 'gatsby';

export const images = graphql`
  fragment articleImage on File {
    childImageSharp {
      gatsbyImageData(width: 800, placeholder: BLURRED, layout: CONSTRAINED)
    }
  }

  fragment sourceImage on File {
    childImageSharp {
      gatsbyImageData(
        width: 72
        formats: [AUTO, WEBP, AVIF]
        layout: CONSTRAINED
      )
    }
  }
`;
