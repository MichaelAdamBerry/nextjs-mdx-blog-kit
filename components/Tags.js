import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

function tagMaker(tagList) {
  let alphabetizedTags = tagList.sort();
  return (
    <Tag>
      {alphabetizedTags.map(tag => (
        <Link prefetch key={`${tag}-link`} href={`/search?q=${tag}`}>
          <TagLink key={tag} className="tag">
            {tag}
          </TagLink>
        </Link>
      ))}
    </Tag>
  );
}

const Tag = styled.div`
  margin: 0.5rem 0 0.5rem 0;
`;

const TagLink = styled.a`
  margin-left: 1rem;
  font-size: 0.9rem;
  padding: 3px 0;
  cursor: pointer;
  text-decoration: none;
  color: var(--blueish);

  &::before {
    content: "#";
  }

  &:first-of-type {
    margin-left: 0;
  }
`;

const TagBlock = props => {
  if (!props.tags || !Array.isArray(props.tags)) return null;
  return tagMaker(props.tags);
};

export default TagBlock;
