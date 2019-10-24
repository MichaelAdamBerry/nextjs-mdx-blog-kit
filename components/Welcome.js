import React from "react";
import styled from "@emotion/styled";
const Welcome = () => {
  return (
    <Layout>
      <h2>Dank Nugs</h2>
      <p>
        Hi! Welcome to my blog. I mainly write about personal software projects
        I'm building, bugs I'm encountering, and things I'm learning.
      </p>
      <p>
        If you have anything to add or if there is a topic you would like me to
        cover, you can contact me at me@adamberry.dev
      </p>
    </Layout>
  );
};

const Layout = styled.div`
  grid-column: 1/6;
  grid-row: 2/5;
  align-self: center;
`;

export default Welcome;
