import styled from "@emotion/styled";

export const SideTitle = styled.h2`
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
