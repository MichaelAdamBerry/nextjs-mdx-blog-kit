import { Component } from "react";
import List from "../components/List";
import Title from "../components/Title";
import { SideTitle } from "../code-snippets/styled-components/SideTitle";
import { plugin } from "postcss";
export const meta = {
  title: "Landing Page for Web Development Blog",
  // The tags are used for SEO in the header property: `<meta name="keywords" content={stringOfAllPostTags} />`
  tags: ["blog", "web development"],
  layout: "blog-post-list",
  publishDate: "2019-10-08",
  modifiedDate: false, // "If used it must be in 'YYYY-MM-DD format' like publishDate"
  seoDescription:
    "Home page for web development blog where I blog about React Front End Development Javascript CSS Accessibility and HTML",
  exclude: false,
  hideProgressBar: false
};

export default ({ allData = [] }) => {
  //TODO MapBlog posts?

  return (
    <>
      <SideTitle>HTML ○ CSS ○ Javascript</SideTitle>

      <List allData={allData} />
    </>
  );
};
