import React from "react";
import styled from "@emotion/styled";
const BlogHeroImg = ({ src, alt, caption }) => {
  return (
    <BlogImageContainer>
      <figure>
        <img src={src} alt={alt} />
        {caption != undefined && <figcaption>{caption}</figcaption>}
      </figure>
    </BlogImageContainer>
  );
};

export default BlogHeroImg;

const BlogImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 550px) {
    width: 350px;
  }
`;
