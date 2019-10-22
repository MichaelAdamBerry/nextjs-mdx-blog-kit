import React from "react";
import styled from "@emotion/styled";
import PostListing from "../components/PostListing";

export const meta = {
  title: "Recent Musings",
  tags: ["Next.js", "MDX"],
  layout: "blog-post-list",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription:
    "All of your blog posts are listed on this page, unless a post has the meta property `exclude: true`."
};

export default function Blog(props) {
  const blogPosts = props.allData.filter(content => content.type == "post");
  console.log(blogPosts);
  return (
    <List>
      <h1>{meta.title}</h1>
      {blogPosts.map((post, index) => (
        <PostListing key={index} post={post} index={index} />
      ))}
    </List>
  );
}
Blog.defaultProps = {
  allData: []
};

const List = styled.div`
  grid-column: 1/6;
  grid-row: 2/5;
  max-width: 550px;
  margin: auto;
  align-self: center;

  h1 {
    padding-bottom: 1.5rem;
    font-weight: 600;
  }
`;
