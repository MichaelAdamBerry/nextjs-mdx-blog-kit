import styled from "@emotion/styled";

export const PostPreview = styled.div`
  width: 100%;

  max-width: 450px;
  background-color: ${props => props.index % 2 != 0 && "#29323875"};
  margin: 0 auto 2rem auto;
  padding: 0.5rem 2rem 1rem 2rem;

  @media (max-width: 425px) {
    width: 90%;
  }
`;
