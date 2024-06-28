import styled from "styled-components";

const StyledDetail = styled.div`
  margin:6rem 0 10rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;

  img {
    border-radius: 25px;
    width: 15rem;
    height: auto;
    box-shadow:0 10px 15px rgba(0, 0, 0, 0.2);
  }

  button {
    margin-bottom: 12rem;
  }

  h1 {
    font-size: 2rem;
    background: rgb(238, 174, 202);
    background: linear-gradient(
      11deg,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow:0 10px 15px rgba(0, 0, 0, 0.2);
  }

  h2 {
    background: rgb(238, 174, 202);
    background: linear-gradient(
      11deg,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1rem;
    text-shadow:0 10px 15px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    font-weight:100;
    text-shadow:0 10px 15px rgba(0, 0, 0, 0.2);
  }

  p {
    margin-bottom: 2rem;
    text-shadow:0 10px 15px rgba(0, 0, 0, 0.2);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 2rem;

    .poster {
      flex-basis: 30%;
    }

    img {
      width: auto;
      height: auto;
    }

    .info {
      flex-basis: 60%;
    }
  }
  @media screen and (min-width: 992px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export default StyledDetail;
