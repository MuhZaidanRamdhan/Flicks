import styled from "styled-components";

const StyledFooter = styled.div`
  border-top: 1px rgb(50, 49, 49) solid;
  background-color: transparent;
  padding: 1rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    background: rgb(238, 174, 202);
    background: linear-gradient(
      69deg,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin-bottom: 1rem;
  }
`;

export default StyledFooter;
