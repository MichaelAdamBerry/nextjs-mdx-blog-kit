import React from "react";
import styled from "@emotion/styled";
import PostListing from "../components/PostListing";
import { SideTitle } from "../code-snippets/styled-components/SideTitle";
import List from "../components/List";
export const meta = {
  title: "Recent Musings",
  tags: ["Next.js", "MDX"],
  layout: "blog-post-list",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription:
    "All of your blog posts are listed on this page, unless a post has the meta property `exclude: true`."
};

export default function Blog({ allData = [] }) {
  return (
    <>
      <SideTitle>Front End Web Development</SideTitle>
      <List allData={allData} />
    </>
  );
}
Blog.defaultProps = {
  allData: []
};
