import { SearchContent } from "../components/layouts/SearchLayout";
import { BlogContent } from "../components/layouts/BlogLayout";
import Nav from "../components/Nav";
import BackBtn from "../components/BackBtn";
export function renderLayout(props, state) {
  const { Component } = props;
  const { postData } = state;
  const { layout } = postData;

  if (!layout || !props.router) return;

  switch (layout) {
    case "post":
      return (
        <div className="site-container">
          <BackBtn />
          <BlogContent>
            <Component {...props} postData={postData} />
          </BlogContent>
        </div>
      );
    case "search":
      return (
        <div className="site-container">
          <SearchContent>
            <Nav />
            <Component {...props} />
          </SearchContent>
        </div>
      );
    case "blog-post-list":
      return (
        <div className="site-container">
          <Nav />
          <Component {...props} />
        </div>
      );
    case "page":
    default:
      return (
        <div className="site-container">
          <Nav />
          <Component {...props} postData={postData} />
        </div>
      );
  }
}
