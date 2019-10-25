import React from "react";
import Link from "next/link";
import TagBlock from "./Tags";
import { PostPreview } from "./PostPreview";
import { PostTitle } from "./PostTitle";
import { PostDate } from "./PostDate";

export default function PostListing(props) {
  const { post, index } = props;
  return (
    <React.Fragment key={`post-list-${index}`}>
      <PostPreview key={`${post.name}-headline`} index={index}>
        <PostTitle>
          <Link prefetch href={`/blog/${post.name}`}>
            <a>{post.title}</a>
          </Link>
        </PostTitle>
        <PostDate modifiedDate={post.distanceFromModified}>
          {post.distanceFromModified
            ? post.distanceFromModified
            : post.distanceFromPost}
        </PostDate>
        <TagBlock tags={post.tags} />
        {post.kicker && <p>{post.kicker}</p>}
      </PostPreview>
    </React.Fragment>
  );
}
