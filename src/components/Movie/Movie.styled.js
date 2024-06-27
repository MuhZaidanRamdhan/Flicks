import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMovie = styled.div`
  text-align: center;
  text-decoration: none;
  margin-bottom: 2rem;

  .container-image {
    max-width: 16rem;
    margin: 0 auto;
    position: relative;
  }

  img {
    display: block;
    border-radius: 15px;
    width: 16rem;
    height: auto;
    margin-bottom: 1rem;
    transition: all 200ms;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  }

  .rating p {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 1;
    width: 4rem;
    text-align: right;
    height: 2rem;
    border-radius: 0 15px 0 15px;
    background-color: rgba(0, 0, 0, 0.500);
    
    color: #fff;
  }

  .overlay {
    border-radius: 15px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 16rem;
    height: auto;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .container-image:hover .overlay {
    opacity: 1;
  }

  .play {
    color: white;
    font-size: 70px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  h3 {
    background: rgb(238, 174, 202);
    background: linear-gradient(
      11deg,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    flex-basis: 50%;
    margin-bottom: 2rem;

    .container-image {
      width: 256px;
      margin: 0 auto;
    }

    h3 {
      font-size: 0.9rem;
    }
  }
  @media screen and (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

export { StyledMovie, StyledLink };
