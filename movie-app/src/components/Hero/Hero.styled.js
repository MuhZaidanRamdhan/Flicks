import styled from "styled-components";

const Container = styled.div`
  margin:6rem 1rem 1rem;

  @media screen and (min-width: 992px) {
    max-width: 1200px;
    margin: 5rem auto;
    padding: 4rem 0;
  }
`;

const StyledHero = styled.section`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const HeroLeft = styled.div`
  margin-bottom: 5rem;

  @media screen and (min-width: 992px) {
    flex-basis: 50%;
    margin-right: 3rem;
  }
`;

const HeroTitle = styled.h2`
  margin-top:1rem;
  background: rgb(238, 174, 202);
  background: linear-gradient(
    69deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
  text-shadow:0 10px 15px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

const HeroGenre = styled.h3`
  background: rgb(238, 174, 202);
  background: linear-gradient(
    69deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-shadow:0 10px 15px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

const HeroDescription = styled.p`
  color:rgba(57, 17, 69,1);
  text-shadow:0 10px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;

  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 25px;
  transition: all 200ms;
  box-shadow:0 10px 15px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    height: auto;
  }
`;

const HeroRight = styled.div`
  flex-basis: 50%;

  @media screen and (min-width: 992px) {
    margin-left: 0;
  }
`;

export {
  Container,
  StyledHero,
  HeroLeft,
  HeroTitle,
  HeroGenre,
  HeroDescription,
  HeroImage,
  HeroRight,
};
