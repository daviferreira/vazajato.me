import { graphql } from 'gatsby';

export const images = graphql`
  fragment articleImage on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
    }
  }

  fragment sourceImage on File {
    childImageSharp {
      gatsbyImageData(formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
    }
  }
`;
