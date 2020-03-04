import React from 'react';
import { graphql } from 'gatsby';

export default ({ data, transition }) => (
  <div className="slideItem" id={`slide-id-${data.slide.index}`}>
    <div
      style={transition && transition.style}
      dangerouslySetInnerHTML={{ __html: data.slide.html }}
    />
  </div>
);

export const query = graphql`
  query SlideQuery($index: Int!) {
    slide(index: { eq: $index }) {
      html
      index
    }
  }
`;
