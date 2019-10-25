import React from "react";
import styled from "@emotion/styled";
import PostListing from "./PostListing";

const List = ({ allData }) => {
  const allBlogPosts = allData.filter(content => content.type == "post");
  console.log(allBlogPosts);

  return (
    <BlogPosts>
      <div className="listHeader header-shadowed">
        <h2>Recent Posts</h2>
        <div className="bottomBorder"></div>
      </div>
      {allBlogPosts.map((post, i) => (
        <PostListing key={i} post={post} index={i} />
      ))}
    </BlogPosts>
  );
};

export default List;

const BlogPosts = styled.div`
  grid-row: 2/6;
  grid-column: 2/5;

  .listHeader {
    color: var(--blueish);
    max-width: 450px;
    margin: auto;
    grid-row: 2/6;
    grid-column: 2/5;
    margin-bottom: 0;
  }

  h2.listHeader {
    font-size: 2rem;
  }

  .header-shadowed {
    text-shadow: 3px 3px 3px #fb8ccc55;
  }

  div.listHeader .bottomBorder {
    width: 30%;
    height: 6px;
    background-color: var(--dark-color-base);
    margin-bottom: 2rem;
    margin-left: -1rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 425px) {
    grid-column: 1/6;

    .listHeader {
      grid-column: 1/6;
      margin-left: 1.5rem;
    }
  }
`;
