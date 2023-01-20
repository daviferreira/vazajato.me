import { graphql } from 'gatsby';

export const images = graphql`
  fragment articleImage on File {
    childImageSharp {
      gatsbyImageData(width: 800, placeholder: BLURRED, layout: FULL_WIDTH)
    }
  }

  fragment sourceImage on File {
    childImageSharp {
      gatsbyImageData(
        width: 72
        formats: [AUTO, WEBP, AVIF]
        layout: FULL_WIDTH
      )
    }
  }
`;
