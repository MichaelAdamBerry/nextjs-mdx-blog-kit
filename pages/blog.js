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
    <>
      <SideTitle>Front End Web Development</SideTitle>
      <List>
        <h1>{meta.title}</h1>
        {blogPosts.map((post, index) => (
          <PostListing key={index} post={post} index={index} />
        ))}
      </List>
    </>
  );
}
Blog.defaultProps = {
  allData: []
};

const SideTitle = styled.h2`
  grid-row: 2/6;
  justify-self: center;
  align-self: start;
  grid-column: 1/6;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-transform-origin: left;
  -ms-transform-origin: left;
  transform-origin: top left;
  font-size: 3rem;
  font-weight: 200;
  color: var(--blueish);

  @media (max-width: 425px) {
    display: none;
  }
`;

const List = styled.div`
  grid-column: 2/5;
  grid-row: 2/5;
  max-width: 550px;
  justify-self: center;
  align-self: center;

  h1 {
    display: none;
    padding-bottom: 1.5rem;
    font-weight: 200;
    @media (max-width: 425px) {
      display: block;
    }
  }
`;
